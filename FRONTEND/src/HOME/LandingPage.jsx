import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookDemoIcon,
  AdCampaignIcon,
  AIDrivenIcon,
  MarkitingIcon,
  ContentIcon,
} from "./Function";

function LandingPage() {
  const navigate = useNavigate();

  const HandleLogin = (e) => {
    navigate("/Login");
  };

  const HandleStartEvent = ()=>{
    if (login) {
      navigate('/Dashboard')
    }else{
      navigate('/Login')
    }
    
  }

  return (
    <div className="bg-gradient-to-br from-black via-[#1a0030] to-black text-white overflow-x-hidden min-h-screen min-w-full relative">
      

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full bg-[#aa00ff] opacity-10 blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full bg-[#8a2be2] opacity-15 blur-3xl z-0"></div>

      <header className="w-full flex justify-between items-center py-6 px-8 md:px-12 lg:px-16 bg-transparent sticky top-0 z-10">
        <div className="flex items-center">
          <a href="#" className="text-3xl font-bold text-[#aa00ff]">
            Aspire
          </a>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex">
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#aa00ff] transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="/"
                  className="text-lg hover:text-[#aa00ff] transition-colors"
                >
                  About
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#aa00ff] transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#aa00ff] transition-colors"
                >
                  Features
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#aa00ff] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li className="ml-8">
                <a
                  href="#"
                  className="text-lg hover:text-[#aa00ff] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li className="ml-8">
                <a
                  href=""
                  onClick={HandleLogin}
                  className="bg-black text-[#aa00ff] px-6 py-2 rounded-md font-bold text-lg border border-[#aa00ff] shadow-[0_0_10px_rgba(170,0,255,0.4)] hover:shadow-[0_0_15px_rgba(170,0,255,0.7)] hover:bg-black/80 transition-all"
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
            <h2 className="text-6xl md:text-7xl lg:text-8xl text-[#aa00ff] mb-6 font-bold border-b-4 border-[#aa00ff] pb-4 inline-block">
              Our Strategy
            </h2>

            <p className="max-w-3xl mx-auto mb-12 text-white/80 text-xl md:text-2xl">
              Advanced AI-powered marketing solutions to optimize your
              campaigns, generate leads, and transform your business with
              data-driven strategies.
            </p>

            <div className="flex gap-6 mb-20 flex-wrap justify-center">
              <a
                href=""
                className="bg-black text-[#aa00ff] px-8 py-4 rounded-md font-bold flex items-center text-xl
                          border border-[#aa00ff] shadow-[0_0_15px_rgba(170,0,255,0.5)] 
                          hover:shadow-[0_0_20px_rgba(170,0,255,0.8)] 
                          transition-all duration-300 hover:bg-black/80"
              >
                Book a Free Demo <BookDemoIcon />
              </a>

              <button onClick={HandleStartEvent} class="bg-transparent text-white px-8 py-4 rounded-md font-bold border border-white/30 flex items-center text-xl hover:border-[#aa00ff] hover:text-[#aa00ff] transition-colors">
                Get Started
                <BookDemoIcon />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <div className="bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 rounded-md p-6 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#aa00ff]">
                  <AdCampaignIcon />
                </div>
                <h3 className="text-xl font-semibold">
                  Ad Campaign Optimization
                </h3>
              </div>

              <div className="bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 rounded-md p-6 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#aa00ff]">
                  <AIDrivenIcon />
                </div>
                <h3 className="text-xl font-semibold">AI-Driven Insights</h3>
              </div>

              <div className="bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 rounded-md p-6 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#aa00ff]">
                  <MarkitingIcon />
                </div>
                <h3 className="text-xl font-semibold">Marketing Strategy</h3>
              </div>

              <div className="bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 rounded-md p-6 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#aa00ff]">
                  <ContentIcon />
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
