import React from 'react';
import MarketLayout from '../../../components/layout/Market/MarketLayout';
import SidebarLayout from '../../../components/layout/Sidebar/SidebarLayout';
import { NextPageWithLayout } from '../../page';

const CreateNFT: NextPageWithLayout = () => {
  return <div>CreateNFT</div>;
};

CreateNFT.getLayout = (page: NextPageWithLayout) => {
  return (
    <MarketLayout>
      <SidebarLayout />
      {page}
    </MarketLayout>
  );
};

export default CreateNFT;
