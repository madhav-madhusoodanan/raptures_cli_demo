// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Proposal {
    uint id;

    struct proposal {
        string title;
        string description;
        bool isClosed;
        address creator;
        bool succeeded;
        uint optionCount;
        mapping(uint256 => uint256) optionVotes;
        mapping(address => bool) voted;
    }

    event newProposal(string title, string description, address creater);
    event proposalClosed(uint propId);
    event newVote(uint propId, uint optionId);

    mapping(uint => proposal) proposals;

    function createProposal(
        string memory title,
        string memory description
    ) public {
        proposals[id].title = title;
        proposals[id].description = description;
        id += 1;
        emit newProposal(title, description, msg.sender);
    }

    function closeProposal(uint propId) public {
        assert(proposals[propId].creator == msg.sender);
        proposals[propId].isClosed = true;
        emit proposalClosed(propId);
    }

    function vote(uint propId, uint optionId) public {
        assert(!proposals[propId].voted[msg.sender]);
        proposals[propId].optionVotes[optionId] += 1;
        proposals[propId].voted[msg.sender] = true;
        emit newVote(propId, optionId);
    }

    function getProposal(
        uint propId
    )
        public
        view
        returns (
            string memory title,
            string memory description,
            bool isClosed,
            address creator,
            bool succeeded
        )
    {
        return (
            proposals[propId].title,
            proposals[propId].description,
            proposals[propId].isClosed,
            proposals[propId].creator,
            proposals[propId].succeeded
        );
    }

    function getOptionVoteCount(
        uint propId,
        uint optionId
    ) public view returns (uint) {
        return proposals[propId].optionVotes[optionId];
    }
}
