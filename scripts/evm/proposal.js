const hre = require("hardhat");

var proposalArray = [];

async function createProposal(config) {
  const proposalId = config.dao.propose(
    config.targets,
    config.values,
    config.calldatas,
    config.description
  );
  return proposalId;
}

async function voteOnProposal(config) {
  config.dao.castVote(config.proposalId, config.support);
}

async function listProposal(config) {
  const filter = {
    address: config.dao.address,
    topics: [
      utils.id(
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"
      ),
    ],
  };
  proposalArray = config.dao.queryFilter(filter);
}
