const prompts = require("prompts");

const voteOnProposal = [
  {
    type: "autocomplete",
    name: "vote",
    message: "for which proposal you want to vote for?",
    choices: [
      //   for(proposal in proposals){
      //     { title: proposal.title }
      // }
    ],
  },
];

module.exports.voteProposal = async (intro) => {
  const response = await prompts(voteOnProposal);
  console.log(response);
};
