// App
import React from 'react';

// Components
import Navbar from '../../reusable/Navbar/Navbar';
import { mockNavbarProps } from '../../reusable/Navbar/Navbar.mock';

const Header = () => {
  return (
    <nav
      className="          flex flex-wrap
    items-center
    justify-between
    w-full
    p-4
    text-lg text-gray-700
    bg-white"
    >
      <p className="text-4xl">Cryptonite</p>
      <Navbar items={mockNavbarProps.header.items} />
    </nav>
  );
};

export default Header;
