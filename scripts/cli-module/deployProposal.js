const hre = require("hardhat");

async function main() {
  const Proposal = await hre.ethers.getContractFactory("Proposal");
  const proposal = await Proposal.deploy();

  await proposal.deployed();
  const contractProposal = await ethers.getContractAt(
    "Proposal",
    proposal.address
  );
  // console.log(contractProposal.address);
  // console.log(await contractProposal.getProposalCount());
  // await contractProposal.createProposal("apple", "ball");
  // console.log(await contractProposal.getProposal(0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

module.exports.contractProposal = this.contractProposal;
