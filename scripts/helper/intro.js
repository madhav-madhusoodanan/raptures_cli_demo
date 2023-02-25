const prompts = require("prompts");
const { ethers } = require("ethers");
const crypto = require("crypto");
const { afterQuestions } = require("./afterQuestions.js");
// const { handleDAOCreation } = require("./daoCreation");
// const { proposalCreation } = require("./createProposal");
// const { voteProposal } = require("./voteProposal");

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
  // {
  //   type: "autocomplete",
  //   name: "value",
  //   message: "What do you want to do?",
  //   choices: [
  //     { title: "Create a DAO", value: handleDAOCreation },
  //     { title: "Create a proposal", value: proposalCreation },
  //     { title: "Vote on a proposal", value: voteProposal },
  //     { title: "Add a member", value: "addMember" },
  //   ],
  // },
];

const exitHandler = () => console.log("") || true;

module.exports.introHandler = async () => {
  const response = await prompts(initialQuestions, { onCancel: exitHandler });
  // console.log(response.name + response.password);
  const sha256Hasher = crypto.createHmac("sha256", response.password);
  const priv_key = sha256Hasher.update(response.name).digest("hex");
  // console.log(priv_key);
  const wallet = new ethers.Wallet(priv_key);
  console.log(wallet.address);
  await afterQuestions();
};
