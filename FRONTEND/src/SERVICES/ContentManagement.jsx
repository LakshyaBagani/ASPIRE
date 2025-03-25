import React from "react";
import {
  AIContentStrategySVG,
  BloggingSVG,
  ContentCalendarSVG,
  VideoProductionSVG,
} from "../FUNCTION/SVG";
import { CheckCircle } from "lucide-react";

function ContentManagement() {
  return (
    <div className="mb-15 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-hidden">
        {/* Content Creation Column */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Content Creation & Management
          </h2>
          <p className="text-gray-300 mb-8">
            Develop engaging, conversion-focused content that resonates with
            your audience, guided by AI insights and managed through our
            comprehensive platform.
          </p>

          <div className="space-y-6">
            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 flex items-center">
              <BloggingSVG />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                  Blogging
                </h3>
                <p className="text-gray-400 mt-2">
                  SEO-optimized blog content guided by AI topic research and
                  keyword analysis.
                </p>
              </div>
            </div>

            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 flex items-center">
              <VideoProductionSVG />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                  Video Production
                </h3>
                <p className="text-gray-400 mt-2">
                  Long-form and short-form video content optimized for
                  engagement and conversion.
                </p>
              </div>
            </div>

            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 flex items-center">
              <ContentCalendarSVG />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                  Content Calendar
                </h3>
                <p className="text-gray-400 mt-2">
                  Strategic planning and scheduling of content across all
                  marketing channels.
                </p>
              </div>
            </div>

            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 flex items-center">
              <AIContentStrategySVG />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                  AI Content Strategy
                </h3>
                <p className="text-gray-400 mt-2">
                  Leverage AI to identify trending topics and content
                  opportunities in your niche.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Performance Analytics Column */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Content Performance Analytics
          </h2>

          <div className="grid grid-cols-1 gap-6">
            

            <div className="bg-slate-800/50 rounded-lg p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-300">
                  Blog Content
                  </h3>
                  <h2 className="text-xl font-bold text-cyan-400">72%</h2>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-full rounded-full"></div>
                </div>
                <h4 className="text-white text-sm ml-1">Traffic Generation</h4>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-300">
                    Video Content
                  </h3>
                  <h2 className="text-xl font-bold text-cyan-400">89%</h2>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-full rounded-full"></div>
                </div>
                <h4 className="text-white text-sm ml-1">Engagement Rate</h4>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-300">
                  Social Media Content
                  </h3>
                  <h2 className="text-xl font-bold text-cyan-400">79%</h2>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-full rounded-full"></div>
                </div>
                <h4 className="text-white text-sm ml-1">Audience Growth</h4>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-300">
                  Email Content
                  </h3>
                  <h2 className="text-xl font-bold text-cyan-400">81%</h2>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-full rounded-full"></div>
                </div>
                <h4 className="text-white text-sm ml-1">Open Rate</h4>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
              <h3 className="text-lg font-medium text-gray-300 mb-4">
                AI Content Recommendation
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="mr-2 text-indigo-400" size={20} />
                  Increase video production for social platform
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="mr-2 text-indigo-400" size={20} />
                  Focus on industry trend analysis in blog content
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="mr-2 text-indigo-400" size={20} />
                  Develop interactive content for higher engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentManagement;
