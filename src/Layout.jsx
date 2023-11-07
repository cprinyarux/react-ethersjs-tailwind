import React from "react";
import { Footer, Navbar } from "./components";
import { FaucetContextProvider } from "./context/FaucetContext";
import { TransactionsProvider } from "./context/TransactionContext";
import { DAOContextProvider } from "./context/DAOContext";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <TransactionsProvider>
      <FaucetContextProvider>
        <DAOContextProvider>

          <div className="min-h-screen">
            <div className="gradient-bg-welcome">
              <Navbar />
              <Outlet />
              <Footer />
            </div>
          </div>
        </DAOContextProvider>
      </FaucetContextProvider>
    </TransactionsProvider>
  );
};

export default Layout;
