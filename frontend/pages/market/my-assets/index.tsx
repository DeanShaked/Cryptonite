// App
import React from 'react';
import { NextPageWithLayout } from '../../page';

// Components
import MarketLayout from '../../../components/layout/Market/MarketLayout';
import SidebarLayout from '../../../components/layout/Sidebar/SidebarLayout';

const MyAssets: NextPageWithLayout = () => {
  return <div>MyAssets</div>;
};

MyAssets.getLayout = (page: NextPageWithLayout) => {
  return (
    <MarketLayout>
      <SidebarLayout />
      {page}
    </MarketLayout>
  );
};
export default MyAssets;
