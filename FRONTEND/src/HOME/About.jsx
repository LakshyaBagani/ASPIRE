import React from "react";
import { BookOpenIcon, LightbulbIcon, TargetIcon } from "./Function";

function About() {
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans bg-gradient-to-br from-black via-[#1a0030] to-black text-white overflow-x-hidden min-h-screen min-w-full relative flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold mb-12 text-white relative after:content-[''] after:absolute after:bottom-[-15px] after:left-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#aa00ff] after:to-[#8a2be2] after:-translate-x-1/2">
        About Aspire
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="relative w-[40%] min-h-[220px] p-6 mb-6 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70 transition-all duration-300">
          <div className="flex flex-col items-start mb-4">
            <LightbulbIcon className="text-[#aa00ff] text-4xl" />
            <h1 className="text-2xl text-[#aa00ff] mt-1 ">Our Vision</h1>
          </div>
          <p className="text-white/80 leading-relaxed">
            To transform digital marketing through AI-driven intelligence, creating unparalleled growth opportunities for businesses worldwide.
          </p>
          <div className="absolute bottom-8 right-6 w-1/6 h-1 bg-gradient-to-r from-[#aa00ff] to-[#8a2be2]"></div>
        </div>

        <div className="relative w-[40%] min-h-[220px] p-6 mb-6 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70 transition-all duration-300">
          <div className="flex flex-col items-start mb-4">
            <TargetIcon className="text-[#aa00ff] text-4xl" />
            <h1 className="text-2xl text-[#aa00ff] mt-1 ">Our Mission</h1>
          </div>
          <p className="text-white/80 leading-relaxed">
            To empower businesses with cutting-edge AI tools and strategies that optimize marketing performance, increase ROI, and create sustainable growth.
          </p>
          <div className="absolute bottom-8 right-6 w-1/6 h-1 bg-gradient-to-r from-[#aa00ff] to-[#8a2be2]"></div>
        </div>
      </div>

      <div className="relative w-[60%] min-h-[340px] p-6 mb-6 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70 transition-all duration-300">
        <div className="flex flex-col items-start mb-4">
          <BookOpenIcon className="text-[#aa00ff] text-4xl" />
          <h1 className="text-2xl text-[#aa00ff] mt-1 ">Our Story</h1>
        </div>
        <p className="text-white/80 leading-relaxed mb-4">
          At Aspire, we recognized a critical gap in the marketing landscape. While data was abundant, the intelligence to leverage it effectively was scarce.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Founded in 2025, our team of AI specialists, marketing experts, and business strategists came together with a unified goal: to create intelligent marketing solutions that transform raw data into actionable growth strategies.
        </p>
        <p className="text-white/80 leading-relaxed">
          Today, we proudly serve over 500 businesses across 30 countries, driving an average of 215% increase in marketing ROI for our clients through our integrated AI-powered platform.
        </p>
        <div className="absolute bottom-6 right-6 w-1/6 h-1 bg-gradient-to-r from-[#aa00ff] to-[#8a2be2]"></div>
      </div>

      <h1 className="text-4xl text-center font-bold mb-12 text-white relative after:content-[''] after:absolute after:bottom-[-15px] after:left-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#aa00ff] after:to-[#8a2be2] after:-translate-x-1/2">
        Why Choose Us?
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="relative w-[30%] min-h-[220px] p-6 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg transition-all duration-300 hover:h-[280px] hover:border-[#aa00ff] group">
          <div className="flex flex-col items-start mb-4">
            <LightbulbIcon className="text-[#aa00ff] text-4xl" />
            <h1 className="text-2xl  mt-1 text-white">Advanced AI Technology</h1>
          </div>
          <p className="text-white/80 leading-relaxed">
            Our proprietary AI algorithms analyze millions of data points to deliver insights that traditional marketing solutions simply can't match.
          </p>
          <p className="text-[#aa00ff] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Powered by: Machine learning, NLP, and predictive analytics
          </p>
        </div>

        <div className="relative w-[30%] min-h-[220px] p-6 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg transition-all duration-300 hover:h-[280px] hover:border-[#aa00ff] group">
          <div className="flex flex-col items-start mb-4">
            <LightbulbIcon className="text-[#aa00ff] text-4xl" />
            <h1 className="text-2xl  mt-1 text-white">Proven Results</h1>
          </div>
          <p className="text-white/80 leading-relaxed">
            Our clients see an average 215% increase in marketing ROI within the first six months of partnership.
          </p>
          <p className="text-[#aa00ff] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Case studies across 30+ industries available
          </p>
        </div>

        <div className="relative w-[30%] min-h-[220px] p-6 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg transition-all duration-300 hover:h-[280px] hover:border-[#aa00ff] group">
          <div className="flex flex-col items-start mb-4">
            <LightbulbIcon className="text-[#aa00ff] text-4xl" />
            <h1 className="text-2xl  mt-1 text-white">Expert Team</h1>
          </div>
          <p className="text-white/80 leading-relaxed">
            Access to marketing strategists, AI specialists, and data scientists with combined 75+ years of industry experience.
          </p>
          <p className="text-[#aa00ff] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Personal strategy sessions included with all plans
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
