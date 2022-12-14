import Web3 from 'web3';
import { abis } from '../../contracts';

// TODO: Generate ABI type for the router02 ABI
export const getRouterInfo = async (routerAddress, web3) => {
  const router = new web3.eth.Contract(abis.router01, routerAddress);
  const factoryAddress = await router.methods.factory().call();
  return {
    factory: factoryAddress,
  };
};
