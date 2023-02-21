const prompts = require("prompts")

const furtherQuestions = [
    {
        type: "text",
        name: "password",
        message: "Sure. Give me a password, and make sure you remember it.",
    },
    {
        type: "text",
        name: "about",
        message: "Tell something about yourself",
        initial: "Why should I?",
    },
]
module.exports.loginHandler = (intro) => {}
