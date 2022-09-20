// App
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Web 3.0 libraries
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

// ABI's
import NFT from '../../artifacts/contracts/NFTMarket/NFT.sol/NFT.json';
import NFTMarket from '../../artifacts/contracts/NFTMarket/NFTMarket.sol/NFTMarket.json';

// Config
import { nftAddress, nftMarketAddress } from '../../lib/config';

// Components
import { NextPageWithLayout } from '../page';
import MarketLayout from '../../components/layout/Market/MarketLayout';
import SidebarLayout from '../../components/layout/Sidebar/SidebarLayout';

const Market: NextPageWithLayout = () => {
  const [nfts, setNfts] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  const toggleLoadingState = () => {
    setLoadingState(!loadingState);
  };
  useEffect(() => {
    loadNFTs();
  }, []);

  const loadNFTs = async () => {
    /* create a generic provider and query for market items */
    const provider = new ethers.providers.JsonRpcProvider();

    const nftContract = new ethers.Contract(nftAddress, NFT.abi, provider);

    const marketContrct = new ethers.Contract(
      nftMarketAddress,
      NFTMarket.abi,
      provider
    );
    const unsoldItems = await marketContrct.fetchUnsoldItems();

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = await Promise.all(
      unsoldItems.map(async (i: any) => {
        const tokenUri = await nftContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    setNfts(items);
    toggleLoadingState();
  };

  const buyNft = async (nft: any) => {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      nftMarketAddress,
      NFTMarket.abi,
      signer
    );

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });
    await transaction.wait();
    loadNFTs();
  };

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

Market.getLayout = (page: NextPageWithLayout) => {
  return (
    <MarketLayout>
      <SidebarLayout />
      {page}
    </MarketLayout>
  );
};

export default Market;
