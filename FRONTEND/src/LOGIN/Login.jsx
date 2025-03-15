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
    <div className="bg-gradient-to-br from-black via-[#1a0030] to-black text-white overflow-x-hidden min-h-screen min-w-full relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full bg-[#aa00ff] opacity-10 blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full bg-[#8a2be2] opacity-15 blur-3xl z-0"></div>

      <header className="w-full flex justify-between items-center py-6 px-8 md:px-12 lg:px-16 bg-transparent sticky top-0 z-10">
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold text-[#aa00ff]">
            Aspire
          </a>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[80vh] relative z-1">
        <div className="bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 rounded-md p-8 w-96 transition-all duration-300 hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70">
          <h2 className="text-3xl font-bold text-center text-[#aa00ff] mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-[#aa00ff]/30 rounded-md focus:outline-none focus:border-[#aa00ff] bg-black/50 text-white transition duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-[#aa00ff]/30 rounded-md focus:outline-none focus:border-[#aa00ff] bg-black/50 text-white transition duration-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between text-sm text-white mb-6">
              <button 
                onClick={changePassword} 
                className="hover:text-[#aa00ff] transition-colors"
              >
                Forgot Password?
              </button>
              <button 
                onClick={Signup} 
                className="hover:text-[#aa00ff] transition-colors"
              >
                Sign Up
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-[#aa00ff] px-6 py-3 rounded-md font-bold text-lg border border-[#aa00ff] shadow-[0_0_10px_rgba(170,0,255,0.4)] hover:shadow-[0_0_15px_rgba(170,0,255,0.7)] hover:bg-black/80 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;