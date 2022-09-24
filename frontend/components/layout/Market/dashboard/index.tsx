import React from 'react';
import MarketLayout from '../../../../pages/market/layout';
import MarketNavbar from '../../../MarketNavbar/MarketNavbar';
import { NextPageWithLayout } from '../../../../pages/page';

const Dashboard: NextPageWithLayout = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = (page: NextPageWithLayout) => {
  return (
    <MarketLayout>
      <MarketNavbar />
      {page}
    </MarketLayout>
  );
};

export default Dashboard;
