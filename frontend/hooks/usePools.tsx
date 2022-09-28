import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { useConfig } from '@usedapp/core';

import { routerAddress } from '../lib/config';
import { getRouterInfo } from '../lib/utils/getRouterInfo';
import { getFactoryInfo } from '../lib/utils/getFactoryInfo';

/** This custom React hook is used to fetch the exchange liquidity pools.
 *
 *  @note that this is a readOnly hook,
 *        Therefore using a readOnlyNodeProvider
 *        which can be deconstructed from useConfig.
 *  @returns an array of the pool's state.
 */

export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  const loadPools = async (providerUrl) => {
    const provider = new Web3.providers.HttpProvider(providerUrl);
    const web3 = new Web3(provider);
    const routerInfo = await getRouterInfo(routerAddress, web3);
    const factoryInfo = await getFactoryInfo(routerInfo.factory, web3);
    return factoryInfo.pairsInfo;
  };

  useEffect(() => {
    const asyncAnswer = async () => {
      const pools = await loadPools(readOnlyUrls[readOnlyChainId]);
    };

    asyncAnswer()
      .then((pools) => {})
      .catch(console.error);
    async () => {
      if (pools) {
        setPools(pools);
        setLoading(false);
      }
    };
  }, [readOnlyChainId, readOnlyUrls]);

  return [loading, pools];
};
