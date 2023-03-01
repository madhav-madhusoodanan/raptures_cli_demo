const prompts = require("prompts");
const { contractProposal } = require("./deployProposal.js");

var proposalArray = [];
async function getProposals() {
  contractProposal.createProposal("aple", "bal");
  const proposalCount = await contractProposal.getProposalCount();
  proposalArray = [];
  for (let i = 0; i < proposalCount; i++) {
    let proposal = await contractProposal.getProposal(i);
    if (proposal.isClosed) proposalArray.push({ title: proposal.title });
  }
}

const voteOnProposal = [
  {
    type: "autocomplete",
    name: "vote",
    message: "for which proposal you want to vote for?",
    choices: proposalArray,
    //   for(proposal in proposalArray){
    //     { title: proposal.title, value: "vote" },
    // }
  },
];

module.exports.voteProposal = async (intro) => {
  await getProposals();
  const response = await prompts(voteOnProposal);
  console.log(response);
};
