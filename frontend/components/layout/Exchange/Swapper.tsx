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
  getFailureMessage,
  getSuccessMessage,
  isOperationPending,
} from '../../../lib/helpers';

export interface ISwapper {
  pools: {};
}

const Swapper: React.FC<ISwapper> = ({ pools }) => {
  const { account } = useEthers();

  const isApproving = isOperationPending('approved'); // TODO
  const isSwapping = isOperationPending('swap'); // TODO

  const successMessage = getSuccessMessage(); // TODO
  const failureMessage = getFailureMessage(); // TODO

  // Router Contract Instance
  const routerContract = new Contract(routerAddress, abis.router02);

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
    </div>
  );
};

export default Swapper;

// @dev notes:
// React.FC<ISwapper> ==> react.functional_component<props_interface>
// ISwapper ==> All available props
