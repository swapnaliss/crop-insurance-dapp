require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    ganache: {
      url: "http://localhost:8545"
    },
    goerli: {
      url: `https://goerli.infura.io/v3/f3e43dec8ea4453a9dc00e08b5c3f9cb`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
    },
  //   hardhat: {
  //     // See its defaults
  //   }

  },
  solidity: "0.8.17",
};
