const { run } = require("hardhat");

const comptrollerAddress = '0x3d5BC3c8d13dcB8bF317092d84783c2697AE9258';
const creamDeployerAddress = '0x197939c1ca20c2b506d6811d8b6cdb3394471074';
const wethAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const usdcAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
const usdcBurner = '0x0980f2F0D2af35eF2c4521b2342D59db575303F7';

async function main() {
  const reserveManagerAddress = "0xbDfe6079b50DF618e81983Dd6aD31cfa6d45D41A";

  await run("verify:verify", {
    address: reserveManagerAddress,
    contract: "contracts/ReserveManager.sol:ReserveManager",
    constructorArguments: [
      creamDeployerAddress, comptrollerAddress, usdcBurner, wethAddress, usdcAddress
    ]
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
