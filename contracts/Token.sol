pragma solidity ^0.8.9;

import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";

contract Token is IVotes {
    function getVotes(address account) external view returns (uint256) {}

    function getPastVotes(
        address account,
        uint256 blockNumber
    ) external view returns (uint256) {}

    function getPastTotalSupply(
        uint256 blockNumber
    ) external view returns (uint256) {}

    function delegates(address account) external view returns (address) {}

    function delegate(address delegatee) external {}

    function delegateBySig(
        address delegatee,
        uint256 nonce,
        uint256 expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {}
}
