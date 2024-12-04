// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Import the ERC20 standard from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; // Optional: For ownership controls

// Your custom token contract
contract TokenizedAsset is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("TokenizedAsset", "TKA") {
        // Mint the initial supply of tokens to the contract deployer
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }

    // Optional: Add a function to mint tokens, restricted to the owner
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}


