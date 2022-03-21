pragma solidity ^0.7.3;
pragma experimental ABIEncoderV2;

interface TokenContract {
    function balanceOf(address account) external view returns (uint256);
}

contract Utility {
    struct TokenBalances {
        address token;
        uint256 balance;
    }

    function getBalances(address walletAddress, address[] memory tokenAddresses)
        external
        view
        returns (TokenBalances[] memory)
    {
        TokenBalances[] memory tokenBalances = new TokenBalances[](
            tokenAddresses.length
        );

        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            uint256 balance = TokenContract(tokenAddresses[i]).balanceOf(
                walletAddress
            );
            tokenBalances[i] = TokenBalances(tokenAddresses[i], balance);
        }
        return tokenBalances;
    }
}
