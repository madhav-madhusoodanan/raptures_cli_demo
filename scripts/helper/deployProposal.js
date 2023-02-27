const hre = require("hardhat");

async function main() {
  const Proposal = await hre.ethers.getContractFactory("Proposal");
  const proposal = await Proposal.deploy();

  await proposal.deployed();
  const contractProposal = await ethers.getContractAt(
    "Proposal",
    proposal.address
  );
}

module.exports.contractProposal = this.contractProposal;

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
