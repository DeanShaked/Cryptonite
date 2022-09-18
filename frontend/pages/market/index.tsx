// App
import React from 'react';

// Components
import { MarketLayout } from '../../components/layout/Market/MarketLayout';
import Navbar from '../../components/reusable/Navbar/Navbar';

const Market = () => {
  const navbarItems = {
    items: [
      {
        id: 1,
        title: 'home',
        href: '/market/',
        value: 'Home',
      },
      {
        id: 2,
        title: 'create-nft',
        href: '/market/create-nft',
        value: 'Create NFT',
      },
      {
        id: 3,
        title: 'dashboard',
        href: '/market/dashboard',
        value: 'Dashboard',
      },
      {
        id: 4,
        title: 'my-assets',
        href: '/market/my-assets',
        value: 'My Assets',
      },
    ],
  };
  return (
    <div>
      <h1>Market</h1>
      <Navbar items={navbarItems.items} />
    </div>
  );
};

Market.PageLayout = MarketLayout;

export default Market;
