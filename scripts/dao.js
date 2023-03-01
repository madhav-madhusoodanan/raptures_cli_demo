const hre = require("hardhat")
const { introHandler } = require("./cli-module/intro")
const { afterQuestions } = require("./cli-module/afterQuestions.js")
const { createWallet } = require("./evm/createWallet")

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
    }

    const wallet = await introHandler(functionObject)
    const nextActionFunction = await afterQuestions()
    const actionResponse = await nextActionFunction()

    /* 
      actionResponse will have the set of options that the user chose
      along with the associated function executor
      
      this executor is blockchain dependent

      actionResponse  = {
        func,
        [name, addresss, etc, ...arguments]
      }
    */
    const response = actionResponse.func(actionResponse)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
