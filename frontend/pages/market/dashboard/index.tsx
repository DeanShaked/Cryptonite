import React from 'react';
import MarketLayout from '../../../components/layout/Market/MarketLayout';
import SidebarLayout from '../../../components/layout/Sidebar/SidebarLayout';
import { NextPageWithLayout } from '../../page';

const Dashboard: NextPageWithLayout = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = (page: NextPageWithLayout) => {
  return (
    <MarketLayout>
      <SidebarLayout />
      {page}
    </MarketLayout>
  );
};

export default Dashboard;
