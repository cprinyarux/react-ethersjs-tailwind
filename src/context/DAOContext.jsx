import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { DAOContractABI, DAOContractAddress } from "../utils/constants";

export const DAOContext = createContext();

const createEthereumContract = () => {
 
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const DAOContract = new ethers.Contract(
    DAOContractAddress,
    DAOContractABI,
    signer
  );

  return DAOContract;
};

export const DAOContextProvider = ({ children }) => {
  const [DAOContract, setDAOContract] = useState(null);
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
      setDAOContract(contract);
    } catch (error) {
      console.log(error);
    }
  };

  const performContribute = async (amount) => {
    try {
      if (ethereum) {
        // const { addressTo, amount, keyword, message } = formData;
        const DAOContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await DAOContract.contribute(currentAccount, parsedAmount);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        // const transactionsCount = await DAOContract.getTransactionCount();

        // setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    // template();

    checkIfWalletIsConnect();
  }, []);
  return (
    <DAOContext.Provider
      value={{
        connectWallet,
        checkIfWalletIsConnect,
        currentAccount,
        setCurrentAccount,
        DAOContract,
        performContribute,
      }}
    >
      {children}
      </DAOContext.Provider>
  );
};
