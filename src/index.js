import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Account from "./components/Account";
import ConnectId from "./components/ConnectId";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="user-wallet-choice" element={<ConnectId />} />
        <Route path="import-wallet" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
