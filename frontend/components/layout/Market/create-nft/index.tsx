import React from 'react';
import MarketLayout from '../../../../pages/market/layout';
import MarketNavbar from '../../../MarketNavbar/MarketNavbar';
import { NextPageWithLayout } from '../../../../pages/page';

const CreateNFT: NextPageWithLayout = () => {
  return <div>CreateNFT</div>;
};

CreateNFT.getLayout = (page: NextPageWithLayout) => {
  return (
    <MarketLayout>
      <MarketNavbar />
      {page}
    </MarketLayout>
  );
};

export default CreateNFT;
