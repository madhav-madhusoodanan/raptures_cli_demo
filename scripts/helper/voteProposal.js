const prompts = require("prompts");
const { contractProposal } = require("./deployProposal.js");

const proposalCount = contractProposal.proposalCount;
const proposalArray = [];
for (let i = 0; i < proposalCount; i++) {
  let proposal = contractProposal.getProposal;
  if (proposal.isClosed) proposalArray.push(proposal);
}

const voteOnProposal = [
  {
    type: "autocomplete",
    name: "vote",
    message: "for which proposal you want to vote for?",
    choices: [
      //   for(proposal in proposalArray){
      //     { title: proposal.title, value: "vote" },
      // }
    ],
  },
];

module.exports.voteProposal = async (intro) => {
  const response = await prompts(voteOnProposal);
  console.log(response);
};
