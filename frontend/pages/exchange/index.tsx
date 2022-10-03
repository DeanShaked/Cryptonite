// App
import React from 'react';
import { NextPageWithLayout } from '../page';

// Hooks
import { useEthers } from '@usedapp/core';
import { usePools } from '../../hooks/usePools';

// Components
import Swapper from '../../components/layout/Exchange/Swapper';
import ExchangeLayout from './layout';
import ExchangeLoader from '../../components/reusable/ExchangeLoader/ExchangeLoader';

const Exchange: NextPageWithLayout = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
    <div className="flex-1 flex justify-start items-center flex-col w-full mt-10">
      <h1 className="text-white font-poppins font-black text-5xl tracking-wide">
        Cryptonite Exchange
      </h1>
      <p className="text-dim-white font-poppins font-medium mt-3 text-base">
        Exchange tokens in seconds
      </p>
      <div className="mt-10 w-full flex justify-center">
        <div className="relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl">
          <div className="pink_gradient" />
          <div className="w-full min-h-[400px] bg-site-black backdrop-blur-[4px] rounded-3xl shadow-card flex p-10">
            {/* {account ? (
              poolsLoading ? (
                <ExchangeLoader title="Loading pools, please wait!" />
              ) : (
                <Swapper pools={pools} />
              )
            ) : (
              <ExchangeLoader title="Please connect your wallet" />
            )} */}

            <Swapper pools={pools} />
          </div>
          <div className="blue_gradient" />
          <div />
        </div>
      </div>
    </div>
  );
};

Exchange.getLayout = (page: NextPageWithLayout) => {
  return <ExchangeLayout>{page}</ExchangeLayout>;
};
export default Exchange;
