import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    prater: {
      url: "https://2EkoUjqnRPRCCCEgo4DNqUOsJj0:fa3e9cef46fd2b17cb614708d48040b1@eth2-beacon-prater.infura.io",
    },
    mainnet: {
      url: "https://2EkoUjqnRPRCCCEgo4DNqUOsJj0:fa3e9cef46fd2b17cb614708d48040b1@eth2-beacon-mainnet.infura.io",
    },
  },
};

export default config;
