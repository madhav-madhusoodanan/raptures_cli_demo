const { crypto } = require("crypto");

function sha256Hash(public_key, secret_key) {
  const sha256Hasher = crypto.createHmac("sha256", secret_key);
  const priv_key = sha256Hasher.update(public_key).digest("hex");
  return priv_key;
}

// async function createWallet(response) {
//   const priv_key = sha256Hash(response.name, response.password);
//   const wallet = new ethers.Wallet(priv_key);
//   return wallet;
// }

module.exports.createWallet = (response) => {
  const priv_key = sha256Hash(response.name, response.password);
  const wallet = new ethers.Wallet(priv_key);
  return wallet;
};
