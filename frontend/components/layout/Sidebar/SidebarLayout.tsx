// App
import React from 'react';

// Components
import Navbar from '../../reusable/Navbar/Navbar';

// Mock
import { mockNavbarProps } from '../../reusable/Navbar/Navbar.mock';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return <Navbar items={mockNavbarProps.market_header.items} isRow={false} />;
};

export default SidebarLayout;
