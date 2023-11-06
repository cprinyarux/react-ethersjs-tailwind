import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { faucetContractABI, faucetContractAddress } from "../utils/constants";

export const FaucetContext = createContext();

const createEthereumContract = () => {
 
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const FaucetContract = new ethers.Contract(
    faucetContractAddress,
    faucetContractABI,
    signer
  );

  return FaucetContract;
};

export const FaucetContextProvider = ({ children }) => {
  const [faucetContract, setFaucetContract] = useState(null);
  const [currentAccount, setCurrentAccount] = useState("");
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        template();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const template = async () => {
    const contract = createEthereumContract();
    try {
      setFaucetContract(contract);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // template();

    checkIfWalletIsConnect();
  }, []);
  return (
    <FaucetContext.Provider
      value={{
        connectWallet,
        checkIfWalletIsConnect,
        currentAccount,
        setCurrentAccount,
        faucetContract,
      }}
    >
      {children}
      </FaucetContext.Provider>
  );
};
