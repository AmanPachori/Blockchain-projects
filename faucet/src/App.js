import React, { useEffect, useState, useCallback } from 'react';
import "bulma/css/bulma.min.css";
import './App.css';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider'
import { loadContract } from './utils/loadContract';

function App() {
   
  const [web3Api ,setWeb3Api] = useState({
    provider:null,
    web3:null,
    contract: null,
  })
  const [account ,SetAccount] = useState(null);
  const [balance,setBallance] = useState(null);
  
  const setAccountListner = (provider) => {
    provider.on("accountsChanged", _ => window.location.reload());

    // provider._jsonRpcConnection.events.on("notification", (payload) => {
    //   const { method } = payload;

    //   if (method === "metamask_unlockStateChanged") {
    //     SetAccount(null);
    //   }
    // });
  };
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      
      if (provider) {
        setAccountListner(provider);
        const contract = await loadContract("Faucet",provider);

        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract
        });
      } else {
        console.log("Pleaaase install Metamask !!");
      }
    };
    loadProvider();
  }, []);

  useEffect(() => {
   const loadBalance  = async ()=>{
    const {contract ,web3} = web3Api;
    const balance = await web3.eth.getBalance(contract.address);
    setBallance(web3.utils.fromWei(balance,"ether"));

   }
    web3Api.contract && loadBalance();
  },[web3Api])

  useEffect(() => {
    const getAccount = async () => {
      const account = await web3Api.web3.eth.getAccounts();
      SetAccount(account[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);
 

  /*------------------------Add funds ----------------------- */
  const addFunds = useCallback(async () => {
    const { contract, web3 } = web3Api
     await contract.addFunds({
      from: account,
      value: web3.utils.toWei("1", "ether")
    })
    window.location.reload();
  }, [web3Api, account])

  const withdraw = async () => {
    const { contract, web3 } = web3Api
    const withdrawAmount = web3.utils.toWei("0.1", "ether")
    await contract.withdraw(withdrawAmount, {
      from: account
    })
    window.location.reload();
  }

    return (
      <>
        <div className="faucet-wrapper">
          <div className="faucet">
            <div className="is-flex is-align-items-center">
              <span>
                <strong className="mr-2">Account: </strong>
              </span>
              {account ? <div>{account}</div> : "not Connected"}
            </div>
            <div className="balance-view is-size-2 mb-4">
              Current Balance : <strong>{balance}</strong> Eth
            </div>
            <button disabled={!account} className="button is-link is-light mr-2" onClick={addFunds}>
              Donate 1 eth
            </button>
            <button
              disabled={!account}
              onClick={withdraw}
              className="button is-primary is-light mr-2"
            >
              Withdraw
            </button>
          </div>
        </div>
      </>
    );
}

export default App;
