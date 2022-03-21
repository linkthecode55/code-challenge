const { ethers } = require("hardhat");

const UtilityContract = require("./artifacts/contracts/Utility.sol/Utility.json");



const test = async () => {
    const [deployer] = await ethers.getSigners();
    const { waffle } = require("hardhat");
    const provider = waffle.provider;

    // Deploys 3 token contracts and utility contract

    const Token = await ethers.getContractFactory("Token");
    const token1 = await Token.deploy(10); // argument is supply of token that is sent to deployer
    const token2 = await Token.deploy(20);
    const token3 = await Token.deploy(30);

    const Utility = await ethers.getContractFactory("Utility");
    const utility = await Utility.deploy();

    const ADDR = utility.address; // your contract address
    const ABI = UtilityContract.abi; // your contract ABI
    const ADDRESS = deployer.address; // some wallet address with token balance
    const TOKENS = [token1.address, token2.address, token3.address]; // token contract addresses

    const contract = new ethers.Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);

    return balances;
};

test().then(console.log);