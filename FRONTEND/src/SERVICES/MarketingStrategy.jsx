import React from "react";

function MarketingStrategy() {
  // SVG Number Component
  const NumberSVG = ({ number, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className={`w-10 h-10 absolute top-2 left-2 ${color}`}>
      <circle cx="25" cy="25" r="24" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fill="currentColor" 
        fontSize="24"
      >
        {number}
      </text>
    </svg>
  );

  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-hidden">
        {/* Background blur effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-indigo-600 opacity-10 blur-3xl"></div>
        
        {/* Data-Driven Marketing Strategy Column */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Data-Driven Marketing Strategy
          </h2>
          <p className="text-gray-300 mb-8">
            Develop comprehensive marketing strategies backed by real-time data and AI-powered insights that align with your business objectives and target audience.
          </p>

          <div className="space-y-6">
            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 relative">
              <NumberSVG number="1" color="text-indigo-400" />
              <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300 pl-14">
                Strategy Assessment
              </h3>
              <p className="text-gray-400 mt-2 pl-14">
                Comprehensive analysis of current marketing efforts, market position, and competitive landscape.
              </p>
            </div>

            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 relative">
              <NumberSVG number="2" color="text-indigo-400" />
              <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300 pl-14">
                Goal Definition
              </h3>
              <p className="text-gray-400 mt-2 pl-14">
                Establish clear, measurable, and achievable marketing objectives tied to business outcomes.
              </p>
            </div>

            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 relative">
              <NumberSVG number="3" color="text-indigo-400" />
              <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300 pl-14">
                Strategy Development
              </h3>
              <p className="text-gray-400 mt-2 pl-14">
                AI-assisted strategic planning that identifies the optimal channels, messaging, and timing.
              </p>
            </div>

            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 relative">
              <NumberSVG number="4" color="text-indigo-400" />
              <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300 pl-14">
                Implementation
              </h3>
              <p className="text-gray-400 mt-2 pl-14">
                Execution of strategies across channels with real-time performance monitoring.
              </p>
            </div>

            <div className="group border border-indigo-500/20 rounded-lg p-4 hover:border-indigo-500/40 transition-all duration-300 relative">
              <NumberSVG number="5" color="text-indigo-400" />
              <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300 pl-14">
                Optimization
              </h3>
              <p className="text-gray-400 mt-2 pl-14">
                Continuous improvement based on performance data and emerging opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Success Metrics Column */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Strategy Success Metrics
          </h1>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-300">Market Penetration</h3>
                  <p className="text-gray-400 text-sm mt-2">Expanded market share across primary target segments</p>
                </div>
                <h2 className="text-xl font-bold text-indigo-400">+37%</h2>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-2/5 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative">
            
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-300">Brand Awareness</h3>
                  <p className="text-gray-400 text-sm mt-2">Increase recognition and recall in target audience survey</p>
                </div>
                <h2 className="text-xl font-bold text-cyan-400">+125%</h2>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-4/5 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-300">Customer Acquisition</h3>
                  <p className="text-gray-400 text-sm mt-2">Growth in new customers while reducing acquisition cost</p>
                </div>
                <h2 className="text-xl font-bold text-indigo-400">+70%</h2>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-3/5 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-300">Marketing ROI</h3>
                  <p className="text-gray-400 text-sm mt-2">Significant improvement in return on marketing investment</p>
                </div>
                <h2 className="text-xl font-bold text-cyan-400">+215%</h2>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-full rounded-full"></div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
 
  );
}

export default MarketingStrategy;