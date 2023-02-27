const prompts = require("prompts");
const { ethers } = require("ethers");
const crypto = require("crypto");
const { afterQuestions } = require("./afterQuestions.js");
const { handleDAOCreation } = require("./daoCreation");
const { proposalCreation } = require("./createProposal");
const { voteProposal } = require("./voteProposal");

function sha256Hash(public_key, secret_key) {
  const sha256Hasher = crypto.createHmac("sha256", secret_key);
  const priv_key = sha256Hasher.update(public_key).digest("hex");
  // console.log(priv_key);
  return priv_key;
}

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
  console.log(response.name + response.password);
  const priv_key = sha256Hash(response.name, response.password);
  const wallet = new ethers.Wallet(priv_key);
  console.log(wallet.address);
  // console.log(wallet.publicKey);
};
