import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookDemoIcon,
  AdCampaignIcon,
  AIDrivenIcon,
  MarkitingIcon,
  ContentIcon,
} from "../FUNCTION/SVG";

function LandingPage() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const HandleStartEvent = () => {
    if (login) {
      navigate("/Dashboard");
    } else {
      navigate("/Login");
      setLogin(true);
      navigate("/Dashboard");
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

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <section className="flex flex-col items-center justify-center text-center min-h-[85vh] py-16 px-4">
          <div className="max-w-6xl relative">
            {/* Radial rings */}
            <div className="absolute -left-32 -top-10 w-64 h-64 border border-indigo-500/10 rounded-full animate-pulse duration-4000"></div>
            <div className="absolute -left-24 -top-2 w-48 h-48 border border-cyan-500/10 rounded-full animate-pulse duration-5000"></div>
            <div className="absolute -right-32 -bottom-10 w-64 h-64 border border-indigo-500/10 rounded-full animate-pulse duration-4000"></div>
            <div className="absolute -right-24 -bottom-2 w-48 h-48 border border-cyan-500/10 rounded-full animate-pulse duration-5000"></div>

            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 leading-tight">
                Your Business,
              </h1>
              <h2 className="text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-10 font-bold pb-2 inline-block relative">
                Our Strategy
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full shadow-lg shadow-indigo-500/50"></span>
              </h2>

              <p className="max-w-3xl mx-auto mb-14 text-gray-300 text-xl md:text-2xl leading-relaxed">
                Advanced AI-powered marketing solutions to optimize your
                campaigns, generate leads, and transform your business with
                data-driven strategies.
              </p>

              <div className="flex gap-8 mb-24 flex-wrap justify-center">
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 overflow-hidden z-10"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-xl transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out rounded-md"></span>
                  <span className="absolute bottom-0 right-0 w-8 h-8 bg-white/20 rounded-full -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
                  <span className="absolute top-0 left-0 w-8 h-8 bg-white/20 rounded-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
                  <span className="relative flex items-center text-xl">
                    Book a Free Demo
                    <span className="ml-2">
                      <BookDemoIcon />
                    </span>
                  </span>
                </a>

                <button
                  onClick={HandleStartEvent}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 overflow-hidden"
                >
                  <span className="absolute inset-0 border border-indigo-500/30 group-hover:border-indigo-500/70 transition-all duration-300 rounded-md"></span>
                  <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-cyan-500/0 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-md"></span>
                  <span className="relative flex items-center text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                    Get Started
                    <span className="ml-2">
                      <BookDemoIcon />
                    </span>
                  </span>
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                {/* Ad Campaign */}
                <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-500 hover:translate-y-[-8px] hover:scale-105 overflow-hidden flex-1">
                  <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500"></span>
                  <span className="absolute inset-0 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-500 rounded-xl"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                      <AdCampaignIcon />
                    </div>
                    <h3 className="mt-3 text-base font-semibold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                      Ad Campaign Optimization
                    </h3>
                  </div>
                </div>

                {/* AI-Driven Insights */}
                <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-500 hover:translate-y-[-8px] hover:scale-105 overflow-hidden flex-1">
                  <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500"></span>
                  <span className="absolute inset-0 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-500 rounded-xl"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                      <AIDrivenIcon />
                    </div>
                    <h3 className="mt-3 text-base font-semibold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                      AI-Driven Insights
                    </h3>
                  </div>
                </div>

                {/* Marketing Strategy */}
                <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-500 hover:translate-y-[-8px] hover:scale-105 overflow-hidden flex-1">
                  <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500"></span>
                  <span className="absolute inset-0 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-500 rounded-xl"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                      <MarkitingIcon />
                    </div>
                    <h3 className="mt-3 text-base font-semibold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                      Marketing Strategy
                    </h3>
                  </div>
                </div>

                {/* Content Management */}
                <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-500 hover:translate-y-[-8px] hover:scale-105 overflow-hidden flex-1">
                  <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500"></span>
                  <span className="absolute inset-0 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-500 rounded-xl"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                      <ContentIcon />
                    </div>
                    <h3 className="mt-3 text-base font-semibold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                      Content Management
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
