// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Factory {
    event DAOCreated(address daoAddress, address owner, uint256 creationTime);

    struct DAO {
        string name;
        string description;
    }

    address public owner;
    mapping(uint256 => address) public daos;
    mapping(uint256 => DAO) public daoDetails;

    constructor() {
        owner = msg.sender;
    }

    function addDAO(
        uint256[] memory DAOSpecs,
        address[] memory DAOImplementations,
        string[] memory DAONames,
        string[] memory DAODescriptions
    ) public {
        require(msg.sender == owner, "Only owner can add DAOs");
        for (uint256 i = 0; i < DAOSpecs.length; i++) {
            daos[DAOSpecs[i]] = DAOImplementations[i];
            daoDetails[DAOSpecs[i]] = DAO(DAONames[i], DAODescriptions[i]);
        }
    }

    function createDAO(uint256 _daoSpec) public returns (address) {
        address dao = create(daos[_daoSpec]);
        // INITIALIZE DAO
        emit DAOCreated(dao, msg.sender, block.timestamp);
        return dao;
    }

    function create(address _target) internal returns (address result) {
        bytes20 targetBytes = bytes20(_target);
        assembly {
            let clone := mload(0x40)
            mstore(
                clone,
                0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000
            )
            mstore(add(clone, 0x14), targetBytes)
            mstore(
                add(clone, 0x28),
                0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000
            )
            result := create(0, clone, 0x37)
        }
    }
}
