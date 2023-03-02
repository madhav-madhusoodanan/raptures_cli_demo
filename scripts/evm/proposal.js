const hre = require("hardhat");

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
