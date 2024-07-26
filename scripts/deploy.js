const hre = require("hardhat");

async function main() {
  const EventFlexContract = await hre.ethers.getContractFactory("Eventflex");
  const EventFlexContractDeployed = await EventFlexContract.deploy();
  await EventFlexContractDeployed.deployed();
  console.log(
    `Sample contract deployed to ${EventFlexContractDeployed.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
