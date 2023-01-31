require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://localhost:8545"
    },
  //   hardhat: {
  //     // See its defaults
  //   }
  },
  solidity: "0.8.17",
};
