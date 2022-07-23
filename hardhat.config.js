require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
const dotenv = require("dotenv");
dotenv.config();


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */



/*  -----------------------------------------------------------------------
      CONTRACT-ADDRESS = "0x95C1d5A47018bf6F875B77b31B5d0F89a35F6C3e"    -->  this is the contract address where the contract been deployed
    ----------------------------------------------------------------------  
*/



 module.exports = {
  solidity: "0.8.9",
  networks: {
   rinkeby: {
     url: "", 
     accounts: [ ]
    },
  },

};