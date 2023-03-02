const prompts = require("prompts");

var proposalArray = [];

const voteOnProposal = [
  {
    type: "autocomplete",
    name: "vote",
    message: "for which proposal you want to vote for?",
    choices: proposalArray,
  },
];

module.exports.voteProposal = async () => {
  await getProposals();
  const response = await prompts(voteOnProposal);
  return response;
};
