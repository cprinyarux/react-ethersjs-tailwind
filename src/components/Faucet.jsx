// import { ethers } from "ethers";
// import "./Buy.css";
import { useContext } from "react";
import { FaucetContext } from "../context/FaucetContext";

const Faucet = () => {
  const { faucetContract, currentAccount } = useContext(FaucetContext);

  const requestToken = async (event) => {
    alert("Requesting Token");
    // console.log(faucetContract);
    event.preventDefault();

    const contract = faucetContract;
    const request_address = document.querySelector("#request_address").value;

    const transaction = await contract.requestTokens();
    await transaction.wait();
    alert("Request Transaction successul");
    window.location.reload();
  };

  return (
    
    <div className="flex flex-col h-full mt-32 mb-32 w-full justify-center items-center text-white">
      <h1 className="text-3xl">Request Hack Token</h1>
      <form className="bg-white bg-opacity-20 mt-16 w-3/6 " onSubmit={requestToken}>
        <div className="text-black mt-10 p-10 flex flex-col items-center justify-center">
          <span className="text-white p-10 ">Token Address:</span>
          <input
            className="w-full"
            type="text"
            required="required"
            value={currentAccount}
            id="request_address"
          />

          <button
            className="py-5 px-10 items-center bg-blue-500 rounded-lg  mt-10 "
            type="submit"
            value="Request Token"
            disabled={!faucetContract}
          >
            Request Token
          </button>
        </div>
      </form>
    </div>
  );
};
export default Faucet;
