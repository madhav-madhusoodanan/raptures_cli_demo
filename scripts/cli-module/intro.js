const prompts = require("prompts")

const initialQuestions = [
    {
        type: "text",
        name: "name",
        message: "What's your name?",
    },
    {
        type: "text",
        name: "password",
        message: "enter password",
    },
]

const exitHandler = () => console.log("") || true

/* 
  functionObject = {
    createWallet,

  }
*/

module.exports.introHandler = async (functionObject) => {
    const response = await prompts(initialQuestions, { onCancel: exitHandler })
    return functionObject.createWallet()
}
