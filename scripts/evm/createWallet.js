async function sha256Hash(public_key, secret_key) {
  const { createHmac } = await import("crypto");
  return createHmac("sha256", secret_key).update(public_key).digest("hex");
}

module.exports.createWallet = async (response) => {
  const priv_key = await sha256Hash(response.name, response.password);
  const wallet = new ethers.Wallet(priv_key);
  return wallet;
};
