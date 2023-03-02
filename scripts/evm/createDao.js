const hre = require("hardhat");
const { introHandler } = require("../cli-module/intro");

async function createDAO(config) {
  // config.name, config, contract, ...arguments.
  const daoFactory = await hre.ethers.getContractFactory("Raptures");
  const Dao = await daoFactory.deploy(config.token, config.timeLock);

  // TODO: create dao
  const dao = Dao.connect(introHandler(functionObject));
  return dao;
}

module.exports = createDAO;
