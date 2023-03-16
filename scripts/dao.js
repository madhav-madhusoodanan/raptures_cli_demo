const hre = require("hardhat");
const { createWallet } = require("./evm/createWallet");
const { createDAO } = require("./evm/createDao");

const { introHandler } = require("./cli-module/intro");
const { afterQuestions } = require("./cli-module/afterQuestions.js");
const { handleDAOCreation } = require("./cli-module/daoCreation");
const { proposalCreation } = require("./cli-module/createProposal");
const { voteProposal } = require("./cli-module/voteProposal");

/* const response = await prompts({
    type: "number",
    name: "value",
    message: "How old are you?",
    validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
}) */

async function main() {
  /* 
    handle solana or evm logic here
  */

  const functionObject = {
    createWallet,
    handleDAOCreation,
    proposalCreation,
    voteProposal,
    temp: {},
  };

  const wallet = await introHandler(functionObject);
  const nextActionFunction = await afterQuestions(functionObject);
  const actionResponse = await nextActionFunction();
  console.log(actionResponse);
  /* 
  actionResponse will have the set of options that the user chose
  along with the associated function executor
  
  this executor is blockchain dependent
  
  actionResponse  = {
    func,
    [name, addresss, etc, ...arguments]
  }
  */
  const response = actionResponse.value.func(actionResponse.value);
  console.log(await response);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
