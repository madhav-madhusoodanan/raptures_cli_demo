const prompts = require("prompts");
const { handleDAOCreation } = require("./daoCreation");
const { proposalCreation } = require("./createProposal");
const { voteProposal } = require("./voteProposal");

const afterQuestions = [
  {
    type: "autocomplete",
    name: "value",
    message: "What do you want to do?",
    choices: [
      { title: "Create a DAO", value: handleDAOCreation },
      { title: "Create a proposal", value: proposalCreation },
      { title: "Vote on a proposal", value: voteProposal },
      { title: "Add a member", value: "addMember" },
    ],
  },
];

module.exports.afterQuestions = async (intro) => {
  const response = await prompts(afterQuestions);
  console.log(response);
};
