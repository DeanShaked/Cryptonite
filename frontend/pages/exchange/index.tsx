import React from 'react';
import ExchangeLayout from './layout';
import { NextPageWithLayout } from '../page';

const Exchange = () => {
  return <div>Exchange</div>;
};

Exchange.getLayout = (page: NextPageWithLayout) => {
  return <ExchangeLayout>{page}</ExchangeLayout>;
};
export default Exchange;
