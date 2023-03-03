const hre = require("hardhat");
const { introHandler } = require("../cli-module/intro");

module.exports.createDAO = async (config) => {
  const TimeLockControl = await hre.ethers.getContractFactory(
    "TimelockController"
  );
  const timeLockControl = await TimeLockControl.deploy(
    config.minDelay, // uint256
    config.proposers, // address[]
    config.executors, // address[]
    config.admin // address
  );
  const Token = await hre.ethers.getContractFactory("Token");
  // config.name, config, contract, ...arguments.
  const daoFactory = await hre.ethers.getContractFactory("RapturesFactory");
  const Dao = await daoFactory.deploy(config.token, timeLockControl.address);

  // TODO: create dao
  const dao = Dao.connect(introHandler(functionObject));
  return dao;
};
