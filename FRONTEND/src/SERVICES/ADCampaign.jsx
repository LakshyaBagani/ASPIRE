import React from 'react'

function ADCampaign() {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10 grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-indigo-600 opacity-10 blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Hyper-Targeted Ad Campaign Optimization
                </h2>
                <p className="text-gray-300 mb-8">
                  Our AI-powered platform analyzes audience behavior, market
                  trends, and competitor strategies to create hyper-targeted
                  campaigns that deliver exceptional ROI.
                </p>
                <div className="space-y-6">
                  <div className="group">
                    <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                      Audience Segmentation
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Precision targeting based on demographic, psychographic,
                      and behavioral data.
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                      Real-time Bidding Optimization
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Dynamic bid adjustments that maximize ad spend efficiency
                      across platforms.
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                      Creative A/B Testing
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Automated testing of ad elements to identify
                      highest-performing combinations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 ">
                <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Performance Metrics
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium text-gray-300">
                        Click-Through Rate
                      </h3>
                      <h3 className="text-xl font-bold text-indigo-400">
                        +145%
                      </h3>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-3/4 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium text-gray-300">
                        Conversion Rate
                      </h3>
                      <h3 className="text-xl font-bold text-indigo-400">
                        +90%
                      </h3>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-1/2 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium text-gray-300">
                        Cost Per Acquisition
                      </h3>
                      <h3 className="text-xl font-bold text-cyan-400">-60%</h3>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-2/5 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium text-gray-300">
                        Return On Ad Spend
                      </h3>
                      <h3 className="text-xl font-bold text-indigo-400">
                        +225%
                      </h3>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-4/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default ADCampaign