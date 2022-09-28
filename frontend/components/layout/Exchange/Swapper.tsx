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

export interface ISwapper {
  pools: {};
}

const Swapper: React.FC<ISwapper> = ({ pools }) => {
  return <div></div>;
};

export default Swapper;

// @dev notes:
// React.FC<ISwapper> ==> react.functional_component<props_interface>
// ISwapper ==> All available props
