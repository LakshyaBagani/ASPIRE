import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://0.0.0.0:8000/docs#/Authentication/register_auth_register_post" , {
        email,password
      })
      if(response.status == 200){
        navigate('/');
        alert("Sign Up successfully")
      }
    } catch (error) {
      console.log("Error" , error);
      
    }
  };

  return (
    <div className="text-white overflow-x-hidden min-h-screen w-full relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-violet-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>

      {/* Animated dots */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-40 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-20 w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-150"></div>
        <div className="absolute top-80 right-40 w-2 h-2 bg-violet-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-80 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-60 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
      </div>

      <header className="w-full flex justify-between items-center py-6 px-8 md:px-12 lg:px-16 bg-transparent sticky top-0 z-10">
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Aspire
          </a>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh] py-16 px-4">
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 w-96 border border-indigo-500/30 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20">
            {/* Radial rings */}
            <div className="absolute -left-20 -top-10 w-40 h-40 border border-indigo-500/10 rounded-full animate-pulse duration-4000"></div>
            <div className="absolute -right-20 -bottom-10 w-40 h-40 border border-cyan-500/10 rounded-full animate-pulse duration-5000"></div>
            
            <div className="relative">
              <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6 pb-2 inline-block relative">
                Create Account
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full shadow-lg shadow-indigo-500/50"></span>
              </h2>
              
              <form onSubmit={handleSignUp}>
                <div className="mb-5">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-indigo-500/30 rounded-md focus:outline-none focus:border-indigo-500/70 bg-gray-900/50 text-white transition duration-300"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-indigo-500/30 rounded-md focus:outline-none focus:border-indigo-500/70 bg-gray-900/50 text-white transition duration-300"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-indigo-500/30 rounded-md focus:outline-none focus:border-indigo-500/70 bg-gray-900/50 text-white transition duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-indigo-500/30 rounded-md focus:outline-none focus:border-indigo-500/70 bg-gray-900/50 text-white transition duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 overflow-hidden z-10"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-xl transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out rounded-md"></span>
                  <span className="absolute bottom-0 right-0 w-8 h-8 bg-white/20 rounded-full -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
                  <span className="absolute top-0 left-0 w-8 h-8 bg-white/20 rounded-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
                  <span className="relative flex items-center text-xl">
                    Sign Up
                  </span>
                </button>
              </form>
              
              <div className="text-sm text-gray-300 mt-6 text-center">
                <button
                  onClick={() => navigate("/Login")}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors"
                >
                  Already have an account?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;