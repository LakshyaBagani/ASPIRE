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
    <div className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white overflow-x-hidden min-h-screen min-w-full relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-violet-600 opacity-20 blur-3xl"></div>
      </div>
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-40 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-20 w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-150"></div>
        <div className="absolute top-80 right-40 w-2 h-2 bg-violet-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-80 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
      </div>

      <header className="w-full flex justify-between items-center py-6 px-8 md:px-12 lg:px-16 bg-transparent sticky top-0 z-10">
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">
            Aspire
          </a>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[80vh] relative z-1">
        <div className="bg-gradient-to-br from-slate-950 to-blue-950 border border-indigo-500/30 rounded-md p-8 w-96 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:border-indigo-500/70">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-indigo-500/30 rounded-md focus:outline-none focus:border-indigo-500 bg-slate-900/50 text-white transition duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-indigo-500/30 rounded-md focus:outline-none focus:border-indigo-500 bg-slate-900/50 text-white transition duration-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-200 mb-6">
              <button 
                onClick={changePassword} 
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors"
              >
                Forgot Password?
              </button>
              <button 
                onClick={Signup} 
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors"
              >
                Sign Up
              </button>
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center w-full px-6 py-3 font-bold text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-xl transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out rounded-md"></span>
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-white/20 rounded-full -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
              <span className="absolute top-0 left-0 w-8 h-8 bg-white/20 rounded-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
              <span className="relative z-10">Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;