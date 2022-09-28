import { Goerli, Config } from '@usedapp/core';

export const nftAddress: string = '';
export const nftMarketAddress: string = '';
export const exchangeAddress: string = '';
export const routerAddress: string =
  '0x07713DD21bfF35d0dfb3216B608F07C7f20e54c7';

export const ALCHEMY_GOERLI_URL: string = `https://eth-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_PROJECT_ID}`;

export const DAPP_CONFIG: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: ALCHEMY_GOERLI_URL,
  },
};
