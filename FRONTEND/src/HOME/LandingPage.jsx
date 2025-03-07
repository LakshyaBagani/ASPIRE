import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

    const HandleLogin = (e)=>{
      navigate('/Login');     
    }

  return (
    <div className="bg-gradient-to-br from-black via-[#001f1a] to-black text-white overflow-x-hidden min-h-screen min-w-full relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(12)].map((_, index) => (
            <path
              key={`vertical-${index}`}
              d={`M ${(index + 1) * (100 / 13)}% 0 Q ${
                (index + 1) * (100 / 13) + 0.5
              }% 25%, ${(index + 1) * (100 / 13) - 0.5}% 50%, ${
                (index + 1) * (100 / 13) + 0.5
              }% 75%, ${(index + 1) * (100 / 13)}% 100%`}
              stroke="rgba(0,255,170,0.15)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>

        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(12)].map((_, index) => (
            <path
              key={`horizontal-${index}`}
              d={`M 0 ${(index + 1) * (100 / 13)}% Q 25% ${
                (index + 1) * (100 / 13) + 0.5
              }%, 50% ${(index + 1) * (100 / 13) - 0.5}%, 75% ${
                (index + 1) * (100 / 13) + 0.5
              }%, 100% ${(index + 1) * (100 / 13)}%`}
              stroke="rgba(0,255,170,0.15)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full bg-[#00ffaa] opacity-10 blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full bg-[#007755] opacity-15 blur-3xl z-0"></div>

      <header className="w-full flex justify-between items-center py-6 px-8 md:px-12 lg:px-16 bg-transparent sticky top-0 z-10">
        <div className="flex items-center">
          <a href="#" className="text-3xl font-bold text-[#00ffaa]">
            Aspire
          </a>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex">
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#00ffaa] transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#00ffaa] transition-colors"
                >
                  About
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#00ffaa] transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#00ffaa] transition-colors"
                >
                  Features
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#00ffaa] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#00ffaa] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li className="ml-8">
                <a
                  href=""
                  onClick={HandleLogin}
                  className="bg-black text-[#00ffaa] px-6 py-2 rounded-md font-bold text-lg border border-[#00ffaa] shadow-[0_0_10px_rgba(0,255,170,0.4)] hover:shadow-[0_0_15px_rgba(0,255,170,0.7)] hover:bg-black/80 transition-all"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-4 relative z-1">
        <section className="flex flex-col items-center justify-center text-center min-h-[85vh] py-16 px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-1 font-bold">
              Your Business,
            </h1>
            <h2 className="text-6xl md:text-7xl lg:text-8xl text-[#00ffaa] mb-6 font-bold border-b-4 border-[#00ffaa] pb-4 inline-block">
              Our Strategy
            </h2>

            <p className="max-w-3xl mx-auto mb-12 text-white/80 text-xl md:text-2xl">
              Advanced AI-powered marketing solutions to optimize your
              campaigns, generate leads, and transform your business with
              data-driven strategies.
            </p>

            <div className="flex gap-6 mb-20 flex-wrap justify-center">
              <a
                href="#"
                className="bg-black text-[#00ffaa] px-8 py-4 rounded-md font-bold flex items-center text-xl
                          border border-[#00ffaa] shadow-[0_0_15px_rgba(0,255,170,0.5)] 
                          hover:shadow-[0_0_20px_rgba(0,255,170,0.8)] 
                          transition-all duration-300 hover:bg-black/80"
              >
                Book a Free Demo
                <svg
                  className="ml-3"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-transparent text-white px-8 py-4 rounded-md font-bold border border-white/30 flex items-center text-xl hover:border-[#00ffaa] hover:text-[#00ffaa] transition-colors"
              >
                Our Services
                <svg
                  className="ml-3"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <div className="bg-gradient-to-br from-black to-[#001f1a] border border-[#00ffaa]/30 rounded-md p-6 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] hover:border-[#00ffaa]/70">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#00ffaa]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 22H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 18V11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 18V7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 18V3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 18V7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">
                  Ad Campaign Optimization
                </h3>
              </div>

              <div className="bg-gradient-to-br from-black to-[#001f1a] border border-[#00ffaa]/30 rounded-md p-6 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] hover:border-[#00ffaa]/70">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#00ffaa]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">AI-Driven Insights</h3>
              </div>

              <div className="bg-gradient-to-br from-black to-[#001f1a] border border-[#00ffaa]/30 rounded-md p-6 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] hover:border-[#00ffaa]/70">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#00ffaa]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18V22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.93 4.93L7.76 7.76"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.24 16.24L19.07 19.07"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 12H22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.93 19.07L7.76 16.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.24 7.76L19.07 4.93"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Marketing Strategy</h3>
              </div>

              <div className="bg-gradient-to-br from-black to-[#001f1a] border border-[#00ffaa]/30 rounded-md p-6 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] hover:border-[#00ffaa]/70">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#00ffaa]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 12H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 17H13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Content Management</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
