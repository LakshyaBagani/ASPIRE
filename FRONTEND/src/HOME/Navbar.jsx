import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [login, setLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate()
  
  useEffect(() => {
    setIsVisible(true);
   
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLogin = ()=>{
      navigate('/Login')
  }
  return (
    <div className="text-white min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
      
      <nav 
        className="sticky top-0 border-b border-purple-500/30 w-full flex justify-between items-center px-8 py-6 text-lg backdrop-blur-lg bg-black/20 z-50"
        style={{
          transform: `translateY(${scrollY > 100 ? '0' : '0'}px)`,
          transition: 'transform 0.5s ease',
          boxShadow: scrollY > 100 ? '0 4px 30px rgba(79, 70, 229, 0.15)' : 'none'
        }}
      >
        <div className="flex items-center space-x-4 transform transition duration-1000 translate-y-0 opacity-100">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 group-hover:opacity-100 blur-lg group-hover:blur transition duration-700 animate-pulse"></div>
            <img
              src="/api/placeholder/48/48"
              alt="Logo"
              className="h-12 w-12 rounded-full relative z-10 transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-blue-500 animate-text">
            ASPIRE
          </h1>
        </div>

        <div className="flex space-x-8 items-center">
          <a href="#" className="hover:text-blue-400 transition-all text-xl">Service</a>
          <a href="#" className="hover:text-blue-400 transition-all text-xl">AI</a>
          <a href="#" className="hover:text-blue-400 transition-all text-xl">Pricing</a>
          <a href="#" className="hover:text-blue-400 transition-all text-xl">FAQ</a>
          <button
            className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-white font-semibold text-lg px-5 py-3 rounded-lg overflow-hidden group"
            onClick={handleLogin}
            style={{ 
              transitionDelay: "400ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)" 
            }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10">{login ? "Logout" : "Login"}</span>
          </button>
        </div>
      </nav>

      <div className="relative flex flex-col items-center text-center mt-20 px-6 z-10">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full opacity-30"
              style={{
                top: `${i * 20 + 10}%`,
                left: 0,
                transform: `translateX(${(i % 2 === 0 ? -1 : 1) * (scrollY * 0.2)}px)`,
                transition: 'transform 0.5s ease-out',
              }}
            />
          ))}
        </div>
        
        <h1 
          className={`text-6xl font-extrabold mb-6 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 animate-text">
            YOUR BUSINESS, OUR STRATEGY
          </span>
        </h1>
        
        <p 
          className={`text-2xl text-gray-300 mb-3 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Transforming Small Businesses into Market Leaders with AI
        </p>
        
        <p 
          className={`text-2xl text-gray-300 mb-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Smarter Decisions, Better Marketing, and Faster Growth
        </p>
        
        <button 
          className={`relative bg-purple-600 hover:bg-purple-700 transition-all duration-500 text-white font-semibold text-xl px-8 py-4 rounded-lg overflow-hidden group transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 flex items-center">
            Get Started
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
        </button>
        
        <div className="relative w-20 h-20 mt-16">
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-purple-500 opacity-40"
                style={{
                  width: `${(i + 1) * 100 + 50}px`,
                  height: `${(i + 1) * 100 + 50}px`,
                  animation: `orbit ${10 + i * 5}s linear infinite ${i * 1}s`,
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
                style={{
                  width: "12px",
                  height: "12px",
                  transformOrigin: "center",
                  left: "calc(50% - 6px)",
                  top: "calc(50% - 6px)",
                  animation: `orbitDot ${10 + (i % 3) * 5}s linear infinite ${i * 0.5}s`,
                  transform: `rotate(${i * 60}deg) translateX(${75 + (i % 3) * 50}px)`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-6xl"
        >
          {[
            { title: "AI Strategy", icon: "🧠", desc: "Custom AI solutions tailored to your business needs" },
            { title: "Marketing", icon: "📈", desc: "Data-driven campaigns that deliver results" },
            { title: "Growth", icon: "🚀", desc: "Scale your business with proven strategies" }
          ].map((card, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-800 bg-opacity-30 backdrop-blur-md p-8 rounded-xl group transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-20 opacity-0 rotate-2"
              }`}
              style={{ 
                transitionDelay: `${800 + index * 200}ms`,
                boxShadow: '0 10px 40px -10px rgba(79, 70, 229, 0.2)'
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-800/30 to-blue-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">{card.title}</h3>
                <p className="text-gray-300">{card.desc}</p>
                <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;