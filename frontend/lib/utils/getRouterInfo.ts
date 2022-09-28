import Web3 from 'web3';
import { abis } from '../../contracts';

// TODO: Generate ABI type for the router02 ABI
export const getRouterInfo = async (routerAddress: string, web3: Web3) => {
  const routerABI: any = abis.router02;
  const router = new web3.eth.Contract(routerABI, routerAddress);

  // The factory address returned by getRouterInfo is the address of the factory contract we compiled and deployed using CRANQ
  return {
    factory: await router.methods.factory().call(),
  };
};
