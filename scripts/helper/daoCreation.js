const prompts = require("prompts")

const daoPrompt = [
    {
        type: "autocomplete",
        name: "value",
        message: "Do you want to use a template or create one from scratch?",
        choices: [
            { title: "Use a template" },
            { title: "Create from scratch" },
        ],
    },
]

module.exports.handleDAOCreation = async (intro) => {
    const response = await prompts(daoPrompt)
    console.log(response)
}
