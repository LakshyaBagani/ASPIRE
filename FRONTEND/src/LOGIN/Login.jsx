import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const Signup = (e) => {
    e.preventDefault(); 
    navigate("/SignUp");
  };

  const changePassword = (e) => {
    e.preventDefault(); 
    navigate("/ChangePassword");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-blue-700 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-20 backdrop-blur-xl"></div>
      <div className="relative bg-gray-900 shadow-2xl rounded-2xl p-8 w-96 border border-blue-500">
        <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              onChange={(e) => setEmail(e.target.value)}
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
            />
          </div>
          <div className="mb-4">
            <label
              onChange={(e) => setPassword(e.target.value)}
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
            />
          </div>
          <div className="flex justify-between text-sm text-blue-400 mb-4">
            <button onClick={changePassword} className="hover:underline">
              Forgot Password?
            </button>
            <button onClick={Signup} className="hover:underline">
              Sign Up
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-blue-500/50"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
