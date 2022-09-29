import { abis } from '../../contracts';
import { getPairsInfo } from './getPairsInfo';

export const getFactoryInfo = async (factoryAddress, web3) => {
  const factory = new web3.eth.Contract(abis.factory, factoryAddress);

  const factoryInfo = {
    feeTo: await factory.methods.feeTo().call(),
    feeToSetter: await factory.methods.feeToSetter().call(),
    allPairsLength: await factory.methods.allPairsLength().call(),
    allPairs: [],
    pairsInfo: null,
  };

  for (let i = 0; i < factoryInfo.allPairsLength; i++) {
    const pairAddress = await factory.methods.allPairs(i).call();
    factoryInfo.allPairs.push(pairAddress);
  }

  factoryInfo.pairsInfo = await getPairsInfo(factoryInfo.allPairs, web3);

  return factoryInfo;
};
