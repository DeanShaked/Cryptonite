// App
import React from 'react';

// Components
import Navbar from '../Navbar/Navbar';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import { uniswapLogo } from '../../../assets';

// Mock
import { mockNavbarProps } from '../Navbar/Navbar.mock';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-4 items-center w-full py-4 text-dim-white ">
      <Link href={'/'}>
        <Image
          src={uniswapLogo}
          alt="uniswap-logo"
          className="cursor-pointer"
          width={100}
          height={100}
        />
      </Link>
      <Navbar items={mockNavbarProps.header.items} />
      <ConnectWallet />
    </div>
  );
};

export default Header;
