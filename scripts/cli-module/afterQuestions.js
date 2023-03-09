const prompts = require("prompts")

module.exports.afterQuestions = async (functionObject) => {
    const afterQuestions = [
        {
            type: "autocomplete",
            name: "value",
            message: "What do you want to do?",
            choices: [
                {
                    title: "Create a DAO",
                    value: functionObject.handleDAOCreation,
                },
                {
                    title: "Create a proposal",
                    value: functionObject.proposalCreation,
                },
                {
                    title: "Vote on a proposal",
                    value: functionObject.voteProposal,
                },
            ],
        },
    ]
    const response = await prompts(afterQuestions)
    return response.value
}
