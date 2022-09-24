/* ---------------- IMPORTS START ---------------- */

// General
import axios from 'axios';
import { ethers } from 'ethers';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ABI's
import NFT from '../artifacts/contracts/NFTMarket/NFT.sol/NFT.json';
import NFTMarket from '../artifacts/contracts/NFTMarket/NFTMarket.sol/NFTMarket.json';

// Config
import { nftAddress, nftMarketAddress } from '../lib/config';
import Web3Modal from 'web3modal';

/* ---------------- IMPORTS END ---------------- */

// read-only provider
const web3Provider = new ethers.providers.Web3Provider(window?.ethereum);

// read-write provider
const rpcProvider = new ethers.providers.JsonRpcProvider();

/* needs the user to sign the transaction, so will use Web3Provider and sign it */

// Smart contracts
const nftContract = new ethers.Contract(nftAddress, NFT.abi, rpcProvider);
const marketContract = new ethers.Contract(
  nftMarketAddress,
  NFTMarket.abi,
  rpcProvider
);

/**
 * Get all unsold NFT's available on market
 ** Used in NFT market place
 * @return {*}
 */
export const connectWeb3Provider = async () => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const providerObj = {
    provider: provider,
    signer: signer,
  };
  return provider;
};

/**
 * Get all unsold NFT's available on market
 ** Used in NFT market place
 * @return {*}
 */
export const fetchUnsoldNfts = createAsyncThunk(
  'market/fetchUnsoldItems',
  async () => {
    const unsoldItems = await marketContract.fetchUnsoldItems();
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
    console.log('asyncThunk: unsoldItems', unsoldItems);
    return unsoldItems;
  }
);

/**
 * Get all unsold NFT's available on market
 ** Used in NFT market place
 * @return {*}
 */
export const fetchPurchasedNfts = createAsyncThunk(
  'market/fetchPurchasedNfts',
  async () => {
    const purchasedNfts = await marketContract.fetchPurchasedNfts();
    console.log('asyncThunk: purchasedNfts', purchasedNfts);
    return purchasedNfts;
  }
);
