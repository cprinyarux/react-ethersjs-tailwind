import React from "react";
import { Footer, Navbar } from "./components";
import { FaucetContextProvider } from "./context/FaucetContext";
import { TransactionsProvider } from "./context/TransactionContext";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <TransactionsProvider>
      <FaucetContextProvider>
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      </FaucetContextProvider>
    </TransactionsProvider>
  );
};

export default Layout;
