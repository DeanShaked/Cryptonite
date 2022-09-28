import { Goerli, Config } from '@usedapp/core';

export const nftAddress: string = '';
export const nftMarketAddress: string = '';
export const exchangeAddress: string = '';
export const routerAddress: string = '';

export const ALCHEMY_GOERLI_URL: string = `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

export const DAPP_CONFIG: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: ALCHEMY_GOERLI_URL,
  },
};
