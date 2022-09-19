// App
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Web 3 libraries
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

// Config
import { nftAddress, nftMarketAddress } from '../../lib/config';

// Components
import { MarketLayout } from '../../components/layout/Market/MarketLayout';

const Market = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

Market.PageLayout = MarketLayout;

export default Market;
