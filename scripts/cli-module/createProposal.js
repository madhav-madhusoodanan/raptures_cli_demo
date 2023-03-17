const prompts = require("prompts")
const { readData } = require("./storeData")

module.exports.proposalCreation = async (functionObject) => {
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
    ]
    const response = await prompts(proposalCreater)
    return {
        value: {
            func: functionObject.createProposal,
            dao: await readData(),
            response: response,
        },
    }
}
