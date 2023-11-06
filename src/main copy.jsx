import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";
import { FaucetContextProvider } from "./context/FaucetContext";
import { TransactionsProvider } from "./context/TransactionContext";
ReactDOM.render(
  <TransactionsProvider>
    <FaucetContextProvider>
      <App />
    </FaucetContextProvider>
  </TransactionsProvider>,
  document.getElementById("root")
);
