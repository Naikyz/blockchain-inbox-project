const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
require("dotenv").config();

const { abi, evm } = require("./compile");

const provider = new HDWalletProvider(
  process.env.WALLET_MNEMONIC,
  process.env.INFURA_API_KEY
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();
