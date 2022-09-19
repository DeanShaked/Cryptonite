import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const projectId: string | undefined = process.env.PROJECT_ID;
const privateKey = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "../frontend/artifacts/",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts: [`${privateKey}`],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
