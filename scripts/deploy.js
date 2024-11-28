const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Contract Factory for TokenizedAsset
  const TokenizedAsset = await ethers.getContractFactory("TokenizedAsset");

  // Deploy the contract with an initial supply of 1,000,000 tokens
  const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1 million tokens with 18 decimals
  const tokenizedAsset = await TokenizedAsset.deploy(initialSupply);

  console.log("TokenizedAsset deployed to:", tokenizedAsset.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
