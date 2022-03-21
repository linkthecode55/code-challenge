pragma solidity ^0.7.3;

contract Token {
    string public name = "Token";
    string public symbol = "TOK";

    uint256 public totalSupply;

    address public owner;

    mapping(address => uint256) balances;

    constructor(uint256 supply) {
        // The totalSupply is assigned to transaction sender, which is the account
        // that is deploying the contract.
        balances[msg.sender] = supply;
        totalSupply = supply;
        owner = msg.sender;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
