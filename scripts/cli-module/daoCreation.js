const prompts = require("prompts");
const { createDAO } = require("../evm/createDao");

module.exports.handleDAOCreation = async () => {
  // const signers = await hre.ethers.getSigners();
  // console.log(signers);
  const daoPrompt = [
    {
      type: "autocomplete",
      name: "value",
      message: "Do you want to use a template or create one from scratch?",
      choices: [
        {
          title: "Use a template",
          value: {
            func: createDAO,
            minDelay: 1,
            proposers: [],
            executers: [],
            admin: "",
            tokenName: "Raptures",
            tokenSymbol: "RPT" /*arguments*/,
          },
        },
        {
          title: "Create from scratch",
          value: { func: createDAO /*arguments*/ },
        },
      ],
    },
  ];
  const response = await prompts(daoPrompt);
  return response;
};
