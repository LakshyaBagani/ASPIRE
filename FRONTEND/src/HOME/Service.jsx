import React, { useState } from "react";
import { Element } from "react-scroll";
import AIDriven from "../SERVICES/AIDriven";
import ADCampaign from "../SERVICES/ADCampaign";
import MarketingStrategy from "../SERVICES/MarketingStrategy";
import ContentManagement from "../SERVICES/ContentManagement";

function Service() {
  const [adCampaignOptimization, setAdCampaignOptimization] = useState(true);
  const [aiDrivenInsights, setAiDrivenInsights] = useState(false);
  const [marketingStrategy, setMarketingStrategy] = useState(false);
  const [contentManagement, setContentManagement] = useState(false);

  const resetServices = () => {
    setAdCampaignOptimization(false);
    setAiDrivenInsights(false);
    setMarketingStrategy(false);
    setContentManagement(false);
  };

  const toggleService = (service) => {
    resetServices();
    if (service === "adCampaign") {
      setAdCampaignOptimization(true);
    } else if (service === "aiInsights") {
      setAiDrivenInsights(true);
    } else if (service === "marketing") {
      setMarketingStrategy(true);
    } else if (service === "content") {
      setContentManagement(true);
    }
  };

  return (
    <Element name="Services">
      <div className="text-white overflow-x-hidden min-h-screen w-full relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 w-64 h-64 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI-powered marketing solutions designed to transform
              your business strategy and drive measurable results.
            </p>
          </div>

          {/* Service Selection Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div
              onClick={() => toggleService("adCampaign")}
              className={`${
                adCampaignOptimization
                  ? "bg-gradient-to-r from-indigo-900/40 to-cyan-900/40"
                  : "bg-slate-900/60"
              } 
                p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 border border-indigo-500/20 group`}
            >
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                Ad Campaign Optimization
              </h3>
              <div className="w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300 mt-2"></div>
            </div>

            <div
              onClick={() => toggleService("aiInsights")}
              className={`${
                aiDrivenInsights
                  ? "bg-gradient-to-r from-indigo-900/40 to-cyan-900/40"
                  : "bg-slate-900/60"
              } 
                p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 border border-indigo-500/20 group`}
            >
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                AI-Driven Insights
              </h3>
              <div className="w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300 mt-2"></div>
            </div>

            <div
              onClick={() => toggleService("marketing")}
              className={`${
                marketingStrategy
                  ? "bg-gradient-to-r from-indigo-900/40 to-cyan-900/40"
                  : "bg-slate-900/60"
              } 
                p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 border border-indigo-500/20 group`}
            >
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                Marketing Strategy
              </h3>
              <div className="w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300 mt-2"></div>
            </div>

            <div
              onClick={() => toggleService("content")}
              className={`${
                contentManagement
                  ? "bg-gradient-to-r from-indigo-900/40 to-cyan-900/40"
                  : "bg-slate-900/60"
              } 
                p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 border border-indigo-500/20 group`}
            >
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                Content Management
              </h3>
              <div className="w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300 mt-2"></div>
            </div>
          </div>

          {adCampaignOptimization && <ADCampaign />}

          {aiDrivenInsights && <AIDriven />}

          {marketingStrategy && <MarketingStrategy />}

          {contentManagement && <ContentManagement />}
          
        </div>
      </div>
    </Element>
  );
}

export default Service;
