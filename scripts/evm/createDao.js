const hre = require("hardhat");
const { introHandler } = require("../cli-module/intro");

module.exports.createDAO = async (config) => {
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy(
    config.tokenName,
    config.tokenSymbol
    /*for testing
    "a",
    "A"*/
  );
  const TimeLockControl = await hre.ethers.getContractFactory(
    "TimelockController"
  );
  const timeLockControl = await TimeLockControl.deploy(
    config.minDelay, // uint256
    config.proposers, // address[]
    config.executors, // address[]
    config.admin // address

    /*for testing
    2,
    ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"],
    ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"],
    "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"*/
  );
  // config.name, config, contract, ...arguments.
  const daoFactory = await hre.ethers.getContractFactory("RapturesFactory");
  const Dao = await daoFactory.deploy(token.address, timeLockControl.address);

  // TODO: create dao
  const dao = Dao.connect(
    introHandler(functionObject)
    /*for testing
    "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"*/
  );
  return dao;
};
