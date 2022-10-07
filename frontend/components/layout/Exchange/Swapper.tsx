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

  const isApproving = isOperationPending('approved'); // TODO
  const isSwapping = isOperationPending('swap'); // TODO

  // format to BigNumber
  const fromValueBigNumber = parseUnits(fromValue);

  // available tokens in the liquidity pools
  const availableTokens = getAvailableTokens(pools);

  // convertable counterpart tokens
  const counterpartTokens = getCounterpartTokens(pools, fromToken);

  // find pair address for the swap
  const pairAddress =
    findPoolByTokens(pools, fromToken, toToken)?.address ?? '';

  // Place holders
  const canApprove = true;
  const canSwap = false;

  const successMessage = getSuccessMessage(); // TODO
  const failureMessage = getFailureMessage(); // TODO

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

  const hasEnoughBalance = fromValueBigNumber.lte(fromTokenBalance);

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
