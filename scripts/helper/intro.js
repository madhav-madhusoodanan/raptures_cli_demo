const prompts = require("prompts");
const { handleDAOCreation } = require("./daoCreation");
const { proposalCreation } = require("./createProposal");

const initialQuestions = [
  {
    type: "text",
    name: "name",
    message: "What's your name?",
  },
  {
    type: "autocomplete",
    name: "value",
    message: "What do you want to do?",
    choices: [
      { title: "Create a DAO", value: handleDAOCreation },
      { title: "Create a proposal", value: proposalCreation },
      { title: "Vote on a proposal", value: "voteProposal" },
      { title: "Add a member", value: "addMember" },
    ],
  },
];

const exitHandler = () => console.log("") || true;

module.exports.introHandler = async () => {
  const response = await prompts(initialQuestions, { onCancel: exitHandler });
  console.log(await response.value());
};
