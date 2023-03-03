const prompts = require("prompts");
const { createDAO } = require("../evm/createDao");

module.exports.handleDAOCreation = async () => {
  const daoPrompt = [
    {
      type: "autocomplete",
      name: "value",
      message: "Do you want to use a template or create one from scratch?",
      choices: [
        {
          title: "Use a template",
          value: { func: createDAO /*arguments*/ },
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
