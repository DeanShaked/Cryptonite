// App
import React from 'react';

// Components
import Navbar from '../../reusable/Navbar/Navbar';

const Header = () => {
  const navbarItems = {
    items: [
      {
        id: 1,
        title: 'Home',
        href: '/',
        value: 'Home',
      },
      {
        id: 2,
        title: 'Market',
        href: '/market',
        value: 'NFT Marketplace',
      },
      {
        id: 3,
        title: 'Exchange',
        href: '/exchange',
        value: 'Exchange',
      },
      {
        id: 4,
        title: 'Cynite DAO',
        href: '/dao',
        value: 'Cynite DAO',
      },
    ],
  };
  return (
    <nav className="border-b-2 p-4">
      <p className="text-4xl">Cryptonite</p>
      <Navbar items={navbarItems.items} />
    </nav>
  );
};

export default Header;
