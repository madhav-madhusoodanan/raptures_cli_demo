const prompts = require("prompts")

module.exports.handleDAOCreation = async () => {
    const daoPrompt = [
        {
            type: "autocomplete",
            name: "value",
            message:
                "Do you want to use a template or create one from scratch?",
            choices: [
                { title: "Use a template" },
                { title: "Create from scratch" },
            ],
        },
    ]
    const response = await prompts(daoPrompt)
    return response
}
