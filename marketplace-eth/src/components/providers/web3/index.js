const { createContext, useContext, useEffect } = require("react");
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

const Web3Context = createContext(null);

export default function Web3Provider({children}){

  useEffect(()=>{
    const loadProvider = async () =>{

      const provider = await detectEthereumProvider();
      if(provider){

      }
      else{
        console.error("Please install metamsk")
      }
    }

    loadProvider();
  })
  return(
    <Web3Context.Provider value={{}}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3(){
  return useContext(Web3Context);
}