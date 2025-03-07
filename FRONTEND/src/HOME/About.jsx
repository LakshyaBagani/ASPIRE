import React from 'react';
import { BookOpenIcon, LightbulbIcon, TargetIcon } from './Function';

function About() {
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans bg-gradient-to-br from-black via-[#1a0030] to-black text-white overflow-x-hidden min-h-screen min-w-full relative">
      <h1 className="text-4xl text-center font-bold mb-12 text-white relative after:content-[''] after:absolute after:bottom-[-15px] after:left-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#aa00ff] after:to-[#8a2be2] after:-translate-x-1/2">
        About Aspire
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 p-8 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70 hover:scale-105 transition-all duration-300">
          <h1 className="text-2xl mb-4 text-[#aa00ff] flex items-center">
            <LightbulbIcon />
            <span className="ml-2">Our Vision</span>
          </h1>
          <p className="text-white/80 leading-relaxed">
            To transform digital marketing through AI-driven intelligence, creating unparalleled growth opportunities for businesses worldwide.
          </p>
        </div>

        <div className="flex-1 p-8 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70 hover:scale-105 transition-all duration-300">
          <h1 className="text-2xl mb-4 text-[#aa00ff] flex items-center">
            <TargetIcon />
            <span className="ml-2">Our Mission</span>
          </h1>
          <p className="text-white/80 leading-relaxed">
            To empower businesses with cutting-edge AI tools and strategies that optimize marketing performance, increase ROI, and create sustainable growth.
          </p>
        </div>
      </div>

      <div className="p-8 rounded-lg bg-gradient-to-br from-black to-[#1a0030] border border-[#aa00ff]/30 shadow-lg hover:shadow-[0_0_20px_rgba(170,0,255,0.3)] hover:border-[#aa00ff]/70 transition-all duration-300 mb-12">
        <h1 className="text-2xl mb-4 text-[#aa00ff] flex items-center">
          <BookOpenIcon />
          <span className="ml-2">Our Story</span>
        </h1>
        <p className="text-white/80 leading-relaxed mb-4">
          At Aspire, we recognized a critical gap in the marketing landscape. While data was abundant, the intelligence to leverage it effectively was scarce.
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          Founded in 2025, our team of AI specialists, marketing experts, and business strategists came together with a unified goal: to create intelligent marketing solutions that transform raw data into actionable growth strategies.
        </p>
        <p className="text-white/80 leading-relaxed">
          Today, we proudly serve over 500 businesses across 30 countries, driving an average of 215% increase in marketing ROI for our clients through our integrated AI-powered platform.
        </p>
      </div>
    </div>
  );
}

export default About;