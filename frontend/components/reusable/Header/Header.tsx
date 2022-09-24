// App
import React from 'react';
import { uniswapLogo } from '../../../assets';
import styles from '../../../styles';
import ConnectWallet from '../ConnectWallet/ConnectWallet';

// Components
import Navbar from '../Navbar/Navbar';
import { mockNavbarProps } from '../Navbar/Navbar.mock';

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src={`${uniswapLogo}`}
        alt="uniswap-logo"
        className="w-16 h-16 object-contain"
      />
      <Navbar items={mockNavbarProps.header.items} />
      <ConnectWallet />
    </div>
  );
};

export default Header;
