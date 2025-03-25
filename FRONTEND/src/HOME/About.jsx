import React from "react";
import { BookOpenIcon, LightbulbIcon, LightningIcon, TargetIcon } from "../FUNCTION/SVG";
import { Element } from 'react-scroll';

function About() {
  return (
    <Element name="About">
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

      <div className="container max-w-7xl mx-auto px-4 relative z-10 py-16">
        <h1 className="text-6xl text-center font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 relative">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Aspire
          </span>
          <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full shadow-lg shadow-indigo-500/50 -translate-x-1/2"></span>
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="group relative w-full md:w-1/2 p-6 mb-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 shadow-lg hover:border-indigo-500/40 transition-all duration-500 hover:translate-y-[-8px]">
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-xl"></span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            {/* Our Vision */}
            <div className="relative flex flex-col items-start mb-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                <LightbulbIcon className="text-4xl" />
              </div>
              <h2 className="text-3xl mt-3 font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed relative">
              To transform digital marketing through AI-driven intelligence,
              creating unparalleled growth opportunities for businesses
              worldwide.
            </p>
          </div>

          {/* Our Mission */}
          <div className="group relative w-full md:w-1/2 p-6 mb-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 shadow-lg hover:border-indigo-500/40 transition-all duration-500 hover:translate-y-[-8px]">
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-xl"></span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <div className="relative flex flex-col items-start mb-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                <TargetIcon className="text-4xl" />
              </div>
              <h2 className="text-3xl mt-3 font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed relative">
              To empower businesses with cutting-edge AI tools and strategies
              that optimize marketing performance, increase ROI, and create
              sustainable growth.
            </p>
          </div>
        </div>

        <div className="group relative w-full md:w-4/5 mx-auto p-6 mb-12 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 shadow-lg hover:border-indigo-500/40 transition-all duration-500">
          <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-xl"></span>
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

          {/* Our Story */}
          <div className="relative flex flex-row items-center mb-4">
            <h2 className="text-3xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
              Our Story
            </h2>
          </div>
          <p className="text-gray-300 text-xl leading-relaxed mb-4 relative">
            At Aspire, we recognized a critical gap in the marketing landscape.
            While data was abundant, the intelligence to leverage it effectively
            was scarce.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed mb-4 relative">
            Founded in 2025, our team of AI specialists, marketing experts, and
            business strategists came together with a unified goal: to create
            intelligent marketing solutions that transform raw data into
            actionable growth strategies.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed relative">
            Today, we proudly serve over 500 businesses across 30 countries,
            driving an average of 215% increase in marketing ROI for our clients
            through our integrated AI-powered platform.
          </p>
        </div>

        {/* Why choose Us */}
        <h2 className="text-5xl text-center font-bold mb-16 mt-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 relative">
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Us
          </span>
          <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full shadow-lg shadow-indigo-500/50 -translate-x-1/2"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="group relative w-full md:w-[32%] p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 shadow-lg transition-all duration-500 hover:translate-y-[-8px] hover:scale-105 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500"></span>
            <span className="absolute inset-0 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-500 rounded-xl"></span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <div className="relative flex flex-col items-start mb-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                <LightbulbIcon className="text-4xl" />
              </div>
              <h3 className="text-3xl mt-3 font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                Advanced AI Technology
              </h3>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed relative">
              Our proprietary AI algorithms analyze millions of data points to
              deliver insights that traditional marketing solutions simply can't
              match.
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Powered by: Machine learning, NLP, and predictive analytics
            </p>
          </div>

          <div className="group relative w-full md:w-[32%] p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 shadow-lg transition-all duration-500 hover:translate-y-[-8px] hover:scale-105 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500"></span>
            <span className="absolute inset-0 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-500 rounded-xl"></span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <div className="relative flex flex-col items-start mb-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                <LightningIcon className="text-4xl " />
              </div>
              <h3 className="text-3xl mt-3 font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                Proven Results
              </h3>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed relative">
              Our clients see an average 215% increase in marketing ROI within
              the first six months of partnership.
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Case studies across 30+ industries available
            </p>
          </div>

          <div className="group relative w-full md:w-[32%] p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 shadow-lg transition-all duration-500 hover:translate-y-[-8px] hover:scale-105 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 group-hover:from-indigo-600/20 group-hover:to-cyan-500/20 transition-all duration-500"></span>
            <span className="absolute inset-0 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-500 rounded-xl"></span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

            <div className="relative flex flex-col items-start mb-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 bg-indigo-900/30 rounded-xl p-2 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-cyan-500 transition-all duration-500 shadow-lg shadow-indigo-500/0 group-hover:shadow-indigo-500/30">
                <LightbulbIcon className="text-4xl" />
              </div>
              <h3 className="text-3xl mt-3 font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                Expert Team
              </h3>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed relative">
              Access to marketing strategists, AI specialists, and data
              scientists with combined 75+ years of industry experience.
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Personal strategy sessions included with all plans
            </p>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
}

export default About;
