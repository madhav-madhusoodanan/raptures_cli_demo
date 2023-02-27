const hre = require("hardhat");
const { introHandler } = require("./helper/intro");
const { afterQuestions } = require("./helper/afterQuestions.js");

/* const response = await prompts({
    type: "number",
    name: "value",
    message: "How old are you?",
    validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
}) */

async function main() {
  await introHandler();
  await afterQuestions();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
