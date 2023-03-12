const prompts = require("prompts");
const { createProposal } = require("../evm/proposal");
const { readData } = require("./storeData");

module.exports.proposalCreation = async () => {
  const proposalCreater = [
    // {
    //   type: "text",
    //   name: "title",
    //   message: "Add a proposal title",
    // },
    {
      type: "text",
      name: "proposal",
      message: "Suggest the proposal",
    },
  ];
  const response = await prompts(proposalCreater);
  return {
    value: { func: createProposal, dao: await readData(), response: response },
  };
};
