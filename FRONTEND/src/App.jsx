import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./LOGIN/Login";
import SignUp from "./LOGIN/SignUp";
import ChangePassword from "./LOGIN/ChangePassword";
import Home from "./Home";
import ChooseAi from "./DASHBOARD/ChooseAi";
import MarketingStrategies from "./DASHBOARD/MARKETING/MarketingStrategies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/ChoosePath" element={<ChooseAi />} />
        <Route path="/Dashboard" element={<MarketingStrategies/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
