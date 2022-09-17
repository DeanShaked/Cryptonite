import { HardhatUserConfig } from 'hardhat/config';

const projectId: string = process.env.NEXT_PUBLIC_PROJECT_ID;
const apiSecret: string = process.env.NEXT_PUBLIC_API_SECRET;
const privateKey: string = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    prater: {
      url: `https://${projectId}:${apiSecret}@eth2-beacon-prater.infura.io`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://${projectId}:${apiSecret}@eth2-beacon-mainnet.infura.io`,
      accounts: [privateKey],
    },
  },
};

export default config;
