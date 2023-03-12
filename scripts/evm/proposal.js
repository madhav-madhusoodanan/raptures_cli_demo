const hre = require("hardhat");

var proposalArray = [];

module.exports.createProposal = async (config) => {
  const signers = await hre.ethers.getSigners();
  const dao = await hre.ethers.getContractAt(
    "RapturesFactory",
    "0x1291Be112d480055DaFd8a610b7d1e203891C274",
    signers[0]
  );
  const proposalId = dao.propose(
    signers.map((signer) => signer.address),
    [2],
    [],
    config.response
    // config.targets, //address[] memory targets,
    // config.values, //uint256[] memory values,
    // config.calldatas, //bytes[] memory calldatas,
    // config.description //string memory description*/
  );
  return proposalId;
};

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
