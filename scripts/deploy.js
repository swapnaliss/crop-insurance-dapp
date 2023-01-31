const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const Storage = await hre.ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();

  await storage.deployed();

  console.log(`${storage.signer.address} deployed to ${storage.address}`);
  let details = {
    deployer: storage.signer.address,
    contract: storage.address
  };

  fs.writeFile('details.json', JSON.stringify(details, null, 4), (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log("Details are saved")
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});