import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const HandleLogin = (e) => {
    e.preventDefault();
    setLogin(!login);
    navigate("/Login");
  };

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center py-6 px-8 md:px-12 lg:px-16 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 z-50 shadow-lg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-5 -left-20 w-64 h-64 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
          <div className="absolute -right-20 top-5 w-64 h-64 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        </div>

        <div className="flex items-center relative z-10">
          <a href="#" className="text-3xl font-bold flex items-center">
            <span className="mr-2 relative text-indigo-400 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text  drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">
              <span className="absolute -inset-1 rounded-lg bg-indigo-600/20 blur-sm"></span>
              Aspire
            </span>
          </a>
        </div>

        <div className="flex items-center relative z-10">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="Home"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  spy={true}
                >
                  <a
                    className="text-lg text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors duration-300 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  to="About"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  spy={true}
                >
                  <a
                    className="text-lg text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors duration-300 relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  to="Services"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                >
                  <a
                    className="text-lg text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors duration-300 relative group"
                  >
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  to="Features"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  spy={true}
                >
                  <a
                    className="text-lg text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors duration-300 relative group"
                  >
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  to="Pricing"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  spy={true}
                >
                  <a
                    className="text-lg text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors duration-300 relative group"
                  >
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  spy={true}
                >
                  <a
                    className="text-lg text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 transition-colors duration-300 relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </Link>
              </li>
              <li>
                <a
                  onClick={HandleLogin}
                  className="group relative inline-flex items-center justify-center px-6 py-2 font-bold text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-xl transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out rounded-md"></span>
                  <span className="absolute bottom-0 right-0 w-6 h-6 bg-white/20 rounded-full -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
                  <span className="absolute top-0 left-0 w-6 h-6 bg-white/20 rounded-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
                  <span className="relative z-10">
                    {login ? "Logout" : "Login"}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-24"></div>
    </>
  );
}

export default Navbar;
