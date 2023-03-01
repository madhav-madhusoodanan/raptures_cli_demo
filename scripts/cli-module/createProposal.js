const prompts = require("prompts")

const proposalCreater = [
    {
        type: "text",
        name: "title",
        message: "Add a proposal title",
    },
    {
        type: "text",
        name: "proposal",
        message: "Suggest the proposal",
    },
]
module.exports.proposalCreation = async () => {
    const response = await prompts(proposalCreater)
    return response
}
