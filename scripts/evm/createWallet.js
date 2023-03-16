const { sha256 } = require("../utils/sha256")

module.exports.createWallet = async (response) => {
  const priv_key = await sha256(response.name, response.password);
  const wallet = new ethers.Wallet(priv_key);
  return wallet;
};
