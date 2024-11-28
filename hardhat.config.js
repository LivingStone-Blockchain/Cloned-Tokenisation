require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    mainnet: {
      url: process.env.MAINNET_URL || "", // Mainnet RPC URL
      accounts: [process.env.PRIVATE_KEY], // Private key for deployment
    },
    sepolia: {
      url: process.env.SEPOLIA_URL || "", // Sepolia testnet RPC URL
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
