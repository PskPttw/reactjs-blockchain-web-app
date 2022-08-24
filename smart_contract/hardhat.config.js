// https://eth-mainnet.g.alchemy.com/v2/kYBuPc5eqHVwymg77R3YDuSb05Y6iq-2

require("@nomiclabs/hardhat-waffle")

module.exports = 
{
  solidity: "0.8.0",
  networks: 
  {
    goerli:
    {
      url: "https://eth-goerli.g.alchemy.com/v2/kYBuPc5eqHVwymg77R3YDuSb05Y6iq-2",
      accounts: [ "3f1e528b0ce47418cbaadc22fb676289ddf4e4b22a096239a2cc00657c55818f" ]
    }
  }
}