import { ethers } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";

const contractAddress: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/");
const walletAddress = [
    "0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xfe808b079187cc460f47374580f5fb47c82b87a5"
];
const abi = [
    "function balanceOf(address) view returns (uint256)",
];

const contract = new ethers.Contract(contractAddress, abi, provider);
for (let i = 0; i < walletAddress.length; i++) {
    contract
        .balanceOf(walletAddress[i])
        .then((balance: BigNumber) =>
            console.log(walletAddress[i] + " " + parseInt(balance._hex, 16) / 100000000)
        );
}