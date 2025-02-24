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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-30 backdrop-blur-lg"></div>
      <div className="relative bg-black/30 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-96 border border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-purple-500/50 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-500 animate-text mb-6">
          Login
        </h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white transition duration-300 hover:border-purple-400 hover:shadow-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white transition duration-300 hover:border-purple-400 hover:shadow-lg"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between text-sm text-purple-400 mb-6">
            <button onClick={changePassword} className="hover:underline transition-all duration-300 hover:text-pink-400">
              Forgot Password?
            </button>
            <button onClick={Signup} className="hover:underline transition-all duration-300 hover:text-pink-400">
              Sign Up
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-500 text-white font-semibold text-lg px-5 py-3 rounded-lg overflow-hidden relative shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
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
