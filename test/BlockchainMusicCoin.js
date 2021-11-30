const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BlockchainMusic Coin", function () {
  it('Should create initial supply correctly', async()=> {
    const BlockChainMusicCoin = await ethers.getContractFactory("BlockChainMusicCoin");
    const totalSupply = 100001e3
    const deployed = await BlockChainMusicCoin.deploy(totalSupply, "Example", "EXP")

    expect(await deployed.totalSupply()).to.equal(totalSupply)
  })
  // it("Should return the new greeting once it's changed", async function () {
  //   const Greeter = await ethers.getContractFactory("Greeter");
  //   const greeter = await Greeter.deploy("Hello, world!");
  //   await greeter.deployed();

  //   // expect(await greeter.greet()).to.equal("Hello, world!");

  //   const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();

  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

//   it('Should return the original constructor greeting', async() => {
//     const greeting = "Hello, world!"
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy(greeting);
//     await greeter.deployed();
//     expect(await greeter.greet()).to.equal(greeting)

//   })
// });
