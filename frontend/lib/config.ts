import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers';


export const nftAddress: string = '';
export const nftMarketAddress: string = '';
export const exchangeAddress: string = '';

export const ALCHEMY_GOERLI_URL: string = `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`


export const useDappConfig: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
      [Goerli.chainId]: getDefaultProvider('goerli'),
    },
  }
  