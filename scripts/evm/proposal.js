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

async function newProposal(config){
  config.dao.on("ProposalCreated", (proposalId,
    _msgSender(),
    targets,
    values,
    length,//new string[](targets.length)
    calldatas,
    snapshot,
    deadline,
    description)=>{
      let proposal = {
        proposalId: proposalId,
        _msgSender:_msgSender(),
        targets:targets,
        values:values,
        length:length,//new string[](targets.length),
        calldatas:calldatas,
        snapshot:snapshot,
        deadline:deadline,
        description:description,
      }
      proposalArray.push(proposal);
    })
}
