// App
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Web 3.0 libraries
import { ethers } from 'ethers';

// ABI's
import NFT from '../../artifacts/contracts/NFTMarket/NFT.sol/NFT.json';
import NFTMarket from '../../artifacts/contracts/NFTMarket/NFTMarket.sol/NFTMarket.json';

// Config
import { nftAddress, nftMarketAddress } from '../../lib/config';

// Components
import MarketNavbar from '../../components/MarketNavbar/MarketNavbar';

// Layout
import MarketLayout from './layout';
import { NextPageWithLayout } from '../page';

const Market: NextPageWithLayout = () => {
  // const unsoldNfts = useSelector((state) => state.marketSlice?.unsoldNfts);
  // console.log('unsoldNfts', unsoldNfts);

  // const loadNFTs = async () => {
  //   setNfts(items);
  //   toggleLoadingState();
  // };

  // const buyNft = async (nft: any) => {
  //   const contract = new ethers.Contract(
  //     nftMarketAddress,
  //     NFTMarket.abi,
  //     signer
  //   );

  //   /* user will be prompted to pay the asking proces to complete the transaction */
  //   const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

  //   const transaction = await contract.createMarketSale(nft.tokenId, {
  //     value: price,
  //   });
  //   await transaction.wait();
  //   loadNFTs();
  // };

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

Market.getLayout = (page: NextPageWithLayout) => {
  return (
    <MarketLayout>
      <MarketNavbar />
      {page}
    </MarketLayout>
  );
};

export default Market;
