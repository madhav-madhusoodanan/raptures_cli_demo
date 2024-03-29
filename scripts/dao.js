const hre = require("hardhat")
const { createWallet: createWalletEVM } = require("./evm/createWallet")
const { createDAO: createDAOEVM } = require("./evm/createDao")
const { createProposal: createProposalEVM } = require("./evm/proposal")

const { createWallet: createWalletSolana } = require("./solana/createWallet")
const { createDAO: createDAOSolana } = require("./solana/createDAO")
const { createProposal: createProposalSolana } = require("./solana/createProposal")

const { introHandler } = require("./cli-module/intro")
const { afterQuestions } = require("./cli-module/afterQuestions.js")
const { handleDAOCreation } = require("./cli-module/daoCreation")
const { proposalCreation } = require("./cli-module/createProposal")
const { voteProposal } = require("./cli-module/voteProposal")

async function main() {
    /* 
      handle solana or evm logic here
    */

    const functionObject = {
        handleDAOCreation,
        proposalCreation,
        voteProposal,
        temp: {},
    }
    if (config) {
        // evm
        functionObject.createWallet = createWalletEVM
        functionObject.createProposal = createProposalEVM
        functionObject.createDAO = createDAOEVM
        
    } else {
        // solana
        functionObject.createWallet = createWalletSolana
        functionObject.createProposal = createProposalSolana
        functionObject.createDAO = createDAOSolana
    }

    const wallet = await introHandler(functionObject)
    const nextActionFunction = await afterQuestions(functionObject)
    const actionResponse = await nextActionFunction(functionObject)
    console.log(actionResponse)
    /* 
    actionResponse will have the set of options that the user chose
    along with the associated function executor
    
    this executor is blockchain dependent
    
    actionResponse  = {
      func,
      [name, addresss, etc, ...arguments]
    }
    */
    const response = actionResponse.value.func(actionResponse.value)
    console.log(await response)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
