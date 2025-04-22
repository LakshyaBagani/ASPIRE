import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ADCampaign, AIInsights, BookDemoIcon, CircleIside, Content, MarketStrategy } from '../FUNCTION/SVG';

function ChooseAi() {
  const [subscribe, setSubscribe] = useState(false);
  const navigate = useNavigate();

  const HandleMarketStart = () => {
    if (subscribe) {
      alert("You haven't purchased any plan");
    } else {
      navigate('/DashBoard');
    }
  };

  const aiOptions = [
    {
      id: 1,
      title: "Ad Campaign Optimization",
      description: "Optimize your advertising campaigns with AI-powered analytics for maximum ROI.",
      icon: <ADCampaign/>,
      comingSoon: true
    },
    {
      id: 2,
      title: "AI-Driven Insights",
      description: "Extract valuable insights from your data using advanced AI algorithms.",
      icon: <AIInsights/>,
      comingSoon: true
    },
    {
      id: 3,
      title: "Marketing Strategy",
      description: "Develop comprehensive marketing strategies tailored to your business needs.",
      icon: <MarketStrategy/>,
      comingSoon: false
    },
    {
      id: 4,
      title: "Content Management",
      description: "Efficiently manage your content creation and distribution with AI assistance.",
      icon: <Content/>,
      comingSoon: true
    }
  ];

  return (
    <div className="text-white min-h-screen w-full relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-x-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-violet-600 opacity-20 blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            Which AI would you like to use?
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Select the AI-driven tool that best fits your current marketing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {aiOptions.map((option) => (
            <div
              key={option.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:translate-y-[-8px] border border-indigo-500/30 hover:border-indigo-500/60 overflow-hidden cursor-pointer"
              onClick={option.id === 3 ? HandleMarketStart : null}
            >
              {option.comingSoon && (
                <span className="absolute bottom-4 right-24.5 text-xs py-1 px-2 bg-indigo-900/50 border border-indigo-500/40 rounded-full text-cyan-400 z-10">
                  Coming Soon
                </span>
              )}
              
              {/* Hover effects */}
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              
              <div className="relative flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-3 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30 mb-4">
                  {option.icon}
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                  {option.title}
                </h2>

                <p className="text-gray-400 group-hover:text-gray-300 transition-all duration-300 mb-4">
                  {option.description}
                </p>

                {!option.comingSoon && (
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center text-sm font-medium text-cyan-400 group-hover:text-white transition-all duration-300">
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                )}
              </div>
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 translate-x-8 -translate-y-8 bg-gradient-to-r from-indigo-500 to-cyan-400 rotate-45 transform group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center">
                 <CircleIside/>
                </div>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
                Premium Features Available
              </h3>
              <p className="text-gray-300 mb-4">
                Unlock all AI tools with our premium subscription. Get access to advanced analytics, unlimited AI-generated content, and priority support.
              </p>
              <button className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 overflow-hidden">
                <span className="absolute inset-0 border border-indigo-500/50 group-hover:border-indigo-500/80 transition-all duration-300 rounded-md"></span>
                <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-cyan-500/0 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-md"></span>
                <span className="relative flex items-center text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                  Explore Premium Plans
                  <BookDemoIcon/>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseAi;