import { HardhatUserConfig } from "hardhat/config";
import fs from "fs";

const privateKey: string = fs.readFileSync(".secret").toString();

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    prater: {
      url: `https://${process.env.PROJECT_ID}:${process.env.API_SECRET}@eth2-beacon-prater.infura.io`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://${process.env.PROJECT_ID}:${process.env.API_SECRET}@eth2-beacon-mainnet.infura.io`,
      accounts: [privateKey],
    },
  },
};

export default config;
