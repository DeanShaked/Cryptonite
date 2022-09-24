// App
import React from 'react';

// Components
import Navbar from '../reusable/Navbar/Navbar';

// Mock
import { mockNavbarProps } from '../reusable/Navbar/Navbar.mock';

export interface IMarketNavbar {}

const MarketNavbar: React.FC<IMarketNavbar> = () => {
  return <Navbar items={mockNavbarProps.market_header.items} />;
};

export default MarketNavbar;
