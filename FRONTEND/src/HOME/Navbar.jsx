import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const [login,setlogin] = useState(false);
    const navigate = useNavigate()

    const HandleStart = ()=>{
      if(!login){
          navigate("/Login")
      }else{
          navigate("/Service")
      }
 }

  return (
    <div>
        <nav className=" top-0 left-0 w-full bg-black bg-opacity-30 backdrop-blur-xl shadow-lg border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ASPIRE
          </h1>
          <div className="space-x-6">
            <a href="" className="hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400">
              Services
            </a>
            <a href="" className="hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400">
              AI
            </a>
            <a href="" className="hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400">
              Pricing
            </a>
            <a href="" className="hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400">
              About
            </a>
            <a href="" className="hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400">
              FAQ
            </a>
            <a
              href="/Login"
              onClick={() => setlogin(!login)}
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-purple-500 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              {login?"Logout":"Login"}
            </a>
          </div>
        </div> 
      </nav>
      <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-black via-gray-800 to-blue-900 text-white pt-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Your Business, Our Strategy
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Transforming Small Businesses into Market Leaders with AI
        </p>
        <p className="text-lg md:text-xl mb-6">
          Smarter Decisions, Better Marketing, and Faster Growth
        </p>
        <button onClick={HandleStart} className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
    </div>
  )
}

export default Navbar