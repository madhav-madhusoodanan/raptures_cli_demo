const prompts = require("prompts")
const { proposalCreation } = require("./createProposal")
const { handleDAOCreation } = require("./daoCreation")
const { voteProposal } = require("./voteProposal")

const afterQuestions = [
    {
        type: "autocomplete",
        name: "value",
        message: "What do you want to do?",
        choices: [
            {
                title: "Create a DAO",
                value: handleDAOCreation,
            },
            {
                title: "Create a proposal",
                value: proposalCreation,
            },
            {
                title: "Vote on a proposal",
                value: voteProposal,
            },
        ],
    },
]
module.exports.afterQuestions = async () => {
    const response = await prompts(afterQuestions)
    return response.value
}
