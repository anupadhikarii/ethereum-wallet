import React from 'react'
import "./box.css"

function Footer({contractAddress}) {
  return (
    <div className='footer'>
    <div className="">
        <img className='logo2' src = "https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg"/>
   
    {/* <div>Author: Hege Refsnes</div> */}
    <div className="verticalLine">
    

    
    </div>

    <div className="contract-address">
      <div className='topiccc'>
       <a href='https://rinkeby.etherscan.io/address/0x95C1d5A47018bf6F875B77b31B5d0F89a35F6C3e'>{contractAddress}</a> 
        </div>
    <div className='footerhr'></div>
    {/* <hr className='footerhr'/> */}
    <div>Each Transaction done through our EthAccounts<br/>
    are stored on blockchain/SmartContract.
    <br/>Contract
    address is given above
    </div>
    </div>
     </div>
    </div>
  )
}

export default Footer