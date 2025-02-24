import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './LOGIN/Login';
import SignUp from './LOGIN/SignUp';
import ChangePassword from './LOGIN/ChangePassword';
import Home from './HOME/Home';
import AI from './HOME/AI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/AI" element={<AI/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
