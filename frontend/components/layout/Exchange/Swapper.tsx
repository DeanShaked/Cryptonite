// App++++
import React, { useEffect, useState } from 'react';
import { Contract } from '@ethersproject/contracts';
import { abis } from '../../../contracts';
import {
  ERC20,
  useContractFunction,
  useEthers,
  useTokenAllowance,
  useTokenBalance,
} from '@usedapp/core';
import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import { routerAddress } from '../../../lib/config';
import AmountIn from './AmountIn';
import Balance from './Balance';
import AmountOut from './AmountOut';
import {
  findPoolByTokens,
  getAvailableTokens,
  getCounterpartTokens,
  getFailureMessage,
  getSuccessMessage,
  isOperationPending,
} from '../../../lib/helpers';

export interface ISwapper {
  pools: {};
}

const Swapper: React.FC<ISwapper> = ({ pools }) => {
  const { account } = useEthers();

  const [fromValue, setFromValue] = useState('0');
  const [fromToken, setFromToken] = useState(pools[0].tokenAddress);

  const [toToken, setToToken] = useState('');
  const [resetState, setResetState] = useState(false);

  // format to BigNumber
  const fromValueBigNumber = parseUnits(fromValue);

  // available tokens in the liquidity pools
  const availableTokens = getAvailableTokens(pools);

  // convertable counterpart tokens
  const counterpartTokens = getCounterpartTokens(pools, fromToken);

  // find pair address for the swap
  const pairAddress =
    findPoolByTokens(pools, fromToken, toToken)?.address ?? '';

  // router contract instance
  const routerContract = new Contract(routerAddress, abis.router02);

  // fromToken contract instance
  const fromTokenContract = new Contract(fromToken, ERC20.abi);

  // fetch swapping tokens balances
  const fromTokenBalance = useTokenBalance(fromToken, account);
  const toTokenBalance = useTokenBalance(toToken, account);

  const tokenAllowance =
    useTokenAllowance(fromToken, account, routerAddress) || parseUnits('0');

  const approveNeeded = fromValueBigNumber.gt(tokenAllowance);

  const fromValueIsGreatThan0 = fromValueBigNumber.gt(parseUnits('0'));

  const hasEnoughBalance = fromValueBigNumber.lte(
    fromTokenBalance ?? parseUnits('0')
  );

  /* Swapping Functions */

  // Approve swap transaction
  const { state: swapApproveState, send: swapApproveSend } =
    useContractFunction(fromTokenContract, 'approve', {
      transactionName: 'onApproveRequested',
      gasLimitBufferPercentage: 10,
    });

  // Execute swap transaction
  const { state: swapExecuteState, send: swapExecuteSend } =
    useContractFunction(routerContract, 'swapExactTokensForTokens', {
      transactionName: 'swapExactTokensForTokens',
      gasLimitBufferPercentage: 10,
    });

  // Swap state status
  const isSwapping = isOperationPending(swapExecuteState);
  const isApproving = isOperationPending(swapApproveState);

  // Swap state validation
  const canApprove = !isApproving && approveNeeded;
  const canSwap =
    !approveNeeded && !isSwapping && fromValueIsGreatThan0 && hasEnoughBalance;

  // Swap state messages
  const successMessage = getSuccessMessage(swapApproveState, swapExecuteState);
  const failureMessage = getFailureMessage(swapApproveState, swapExecuteState);

  // Logic of swapper
  const onApproveRequested = () => {
    swapApproveSend(routerAddress, ethers.constants.MaxInt256);
  };

  const onSwapRequested = async () => {
    swapExecuteSend(
      fromValueBigNumber,
      0,
      [fromToken, toToken],
      account,
      Math.floor(Date.now() / 1000) + 60 * 2
    ).then(() => {
      setFromValue('0');
    });
  };

  // Handle user input func
  const onFromValueChanged = (value) => {
    const trimmedValue = value.trim();

    try {
      if (trimmedValue) {
        parseUnits(value);
        setFromValue(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="mb-8">
        <AmountIn />
        <Balance />
      </div>
      <div className="mb-8">
        <AmountOut />
        <Balance />
      </div>
      {approveNeeded && !isSwapping ? (
        <button
          onClick={() => {}}
          disabled={!canApprove}
          className={`border-none outline-none px-6 py-2 font-poppins font-bold text-lg rounded-2xl leading-[24px] transition-all min-h-[56px] ${
            canApprove
              ? 'bg-site-pink text-white '
              : 'bg-site-dim2 text-site-dim2'
          }`}
        >
          {isApproving ? 'Approving...' : 'Approve'}
        </button>
      ) : (
        <button
          onClick={() => {}}
          disabled={!canSwap}
          className={`border-none outline-none px-6 py-2 font-poppins font-bold text-lg rounded-2xl leading-[24px] transition-all min-h-[56px] ${
            canSwap ? 'bg-site-pink text-white ' : 'bg-site-dim2 text-site-dim2'
          }`}
        >
          {isSwapping
            ? 'Swapping...'
            : hasEnoughBalance
            ? 'Swap'
            : 'Insufficient balance'}
        </button>
      )}

      {failureMessage && !resetState ? (
        <p className="font-poppins font-lg text-white font-bold mt-7">
          {failureMessage}
        </p>
      ) : successMessage ? (
        <p className="font-poppins font-lg text-white font-bold mt-7">
          {successMessage}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Swapper;

// @dev notes:
// React.FC<ISwapper> ==> react.functional_component<props_interface>
// ISwapper ==> All available props
