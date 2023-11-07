import abi from "./Transactions.json";

//export const contractAddress = "0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA";
export const contractAddress = "0x7B435F64a81E56327dFEF7e79d28086D78cb68ca";
export const contractABI = abi.abi;

import MemoABI from './chai.json'
import FaucetABI from './Faucet.json'
import DAOABI from './DAO.json'

export const memoContractABI = MemoABI.abi
export const memoContractAddress = "0x5d864Ff93B5D2F1dF3c15999D2054E590ff751cb"

export const faucetContractABI = FaucetABI.abi
export const faucetContractAddress = "0x219F19399204aFfD5556DA2be7f8c5AbE153Ef17"


export const DAOContractABI = DAOABI.abi
export const DAOContractAddress = "0x9d3200e19Da6545c810e1174D1AD7D04DfEbD7C0"