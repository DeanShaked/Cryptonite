import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { useConfig } from '@usedapp/core';

import { routerAddress } from '../lib/config';
import { getRouterInfo } from '../lib/utils/getRouterInfo';
import { getFactoryInfo } from '../lib/utils/getFactoryInfo';

export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  const loadPools = async (providerUrl) => {
    const provider = new Web3.providers.HttpProvider(providerUrl);
    const web3 = new Web3(provider);
    const routerInfo = await getRouterInfo(routerAddress, Web3);
    const factorInfo = await getFactoryInfo();
  };

  useEffect(() => {
    loadPools(readOnlyUrls[readOnlyChainId]).then((pools) => {
      setPools(pools);

      setLoading(false);
    });
  }, [readOnlyUrls, readOnlyChainId]);

  return [loading, pools];
};
