// App
import React from 'react';
import { NextPageWithLayout } from '../../../../pages/page';

// Components
import MarketLayout from '../../../../pages/market/layout';
import MarketNavbar from '../../../MarketNavbar/MarketNavbar';

const MyAssets: NextPageWithLayout = () => {
  return <div>MyAssets</div>;
};

MyAssets.getLayout = (page: NextPageWithLayout) => {
  return (
    <MarketLayout>
      <MarketNavbar />
      {page}
    </MarketLayout>
  );
};
export default MyAssets;
