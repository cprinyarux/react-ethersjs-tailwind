import React from "react";
// import { ReactDOM } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { Welcome, Faucet, Home } from "./components";

import "./index.css";


const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="faucet" element={<Faucet />} />
    </Route>
  ),
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
