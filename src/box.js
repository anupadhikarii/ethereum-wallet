import React  , {useState} from 'react'
import "./box.css"
import Footer from './footer'
const contractabi = require("./abi.json");
const {ethers} = require("ethers")
function Box({loading_,setloading_}) {
    const [connected, setconnected] = useState(false);
    const [sighner, setSighner]  = useState("");
    const [sighneraddress,setSighnerAddress] =useState("");
    const [sighnerBalance,setSighnerBalance] =useState("");
    const [sendTo, setsendTo] = useState("");
    const [amount, setAmount] = useState("");
    const [contract, setContract] = useState("");
    const [remark, setRemark] = useState("");
    const [contractaddress, setcontractAddress] = useState("");
    let provider;
    
     async function ConnectMetamask(){


        if(window.ethereum){
            try{
               
                provider = new ethers.providers.Web3Provider(window.ethereum)
                await provider.send("eth_requestAccounts", []);
                const contractaddress = "0x95C1d5A47018bf6F875B77b31B5d0F89a35F6C3e";
                setcontractAddress(contractaddress)

                setSighner(provider.getSigner());
                const sAdd =await sighner.getAddress();
       
                setSighnerAddress(sAdd);
                const balance = await sighner.getBalance();
                setSighnerBalance(balance.toString() / 1e18 );
                setconnected(true);
                const abi = contractabi.abi;

                setContract(new ethers.Contract(contractaddress,abi,provider));

            }
            catch(err){
                console.log(err)
            }
 

        }else(
            alert("install metaMask")
        )
     }

     async function sendEther(){
        try{
            setloading_(true)
            const tx = await sighner.sendTransaction({
                to: sendTo,
                value: ethers.utils.parseEther(amount.toString())
            })
            console.log(contract.getAddress)
            await contract.connect(sighner).ethersend(sendTo,ethers.utils.parseEther(amount.toString()),remark);
        }
        catch(err){
            setloading_(false)
        }



        const balance = await sighner.getBalance();
        setSighnerBalance(balance.toString() / 1e18);
        setloading_(false)
        setAmount("");
        setsendTo("");
        setRemark("");


     }




  return (

    <div className = "box">

        {!connected ?(
        <div>
        <img className='avatar' src = {require("./avatar.jpg")}/>
        <h1>EthAccounts</h1>
        <img className='logo' src = "https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg"/>
        <p className='text_1'>Welcome To EthAccounts. Cheak/Transfer <br></br>Balance </p>
          <button onClick={ConnectMetamask} className='button1'>Connect Metamask</button>
        </div>

        ):(
            
            <div className='connected'>
                     { loading_? (
      <div className='image'>
      <img className='loading-image' src = {require("./loading/ZZ5H.gif")}/>
      </div>
      ):(<div></div>)}
             <ul className='navlist'>
                <li> <img className='c-avatar' src = {require("./avatar.jpg")}/></li>
          
                 
                <li>   <div> <p className='address'>
    
                  {sighneraddress.slice(0,6)}..........{sighneraddress.slice(-5)}
                  </p>
              </div>
                    
                   </li>

              </ul>   

             <hr className='line'/> 
             {/* <img className='c-logo' src = "https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg"/> */}


             {/* ---> */}
             <div className='Box-body'>
             <p className='balance'> {sighnerBalance.toFixed(4) }</p>
                <div className="form">
                    <input onChange={(event)=> setAmount(event.target.value) } type= "number" className="form__input" placeholder = "Ether Amount" value={amount}/>
                    <input  onChange={(event)=> setsendTo(event.target.value) } type= "Text"className="form__input" placeholder = "To" value={sendTo} />
                    <input  onChange={(event)=> setRemark(event.target.value) } type= "text" className="form__input" placeholder = "Remark" value={remark}  />
                 <button  onClick={sendEther} className = "transac-button">Transact</button>   
                    </div>
            </div>
  
            <Footer  contractAddress = {[contractaddress]}/>
            </div>)
        }

    </div>
  )
}

export default Box