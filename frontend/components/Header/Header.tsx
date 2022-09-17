import React from 'react';
import Link from 'next/link';

const Header = () => {
  const navItems = [
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
      id: '3',
      title: 'Exchange',
      href: '/exchange',
      value: 'Exchange',
    },
    {
      id: 4,
      title: 'DAO',
      href: '/dao',
      value: 'Cynite DAO',
    },
  ];
  return (
    <nav className="border-b-2 p-4">
      <p className="text-4xl">Cryptonite</p>
      <div className="flex mt-4">
        {navItems.map((item) => {
          return (
            <Link key={item.id} href={item.href}>
              <a className="mr-4 text-pink" title={item.title}>
                {item.value}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
