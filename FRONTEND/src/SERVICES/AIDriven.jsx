import React from 'react'

function AIDriven() {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10 grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-hidden">
              {/* Background blur effect */}
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-indigo-600 opacity-10 blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Actionable AI-Driven Business Insights
                </h2>
                <p className="text-gray-300 mb-8">
                  Leverage the power of artificial intelligence to transform
                  your data into actionable insights that drive strategic
                  decision-making and business growth.
                </p>
                <div className="space-y-6">
                  <div className="group">
                    <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                      Customer Behavior Analytics
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Uncover customer preferences, intent, and journey patterns
                      to create personalized experiences.
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                      Predictive Sales Forecasting
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Advanced modeling techniques that predict sales trends
                      with up to 94% accuracy.
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                      Automation Consulting
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Identify processes that can be streamlined through
                      AI-driven automation, reducing costs and improving
                      efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Interactive Analytics Dashboard
                </h2>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-indigo-500/20 shadow-md mb-6">
                  <div className="aspect-video bg-gradient-to-br from-slate-900 to-indigo-900/40 rounded-md flex items-center justify-center overflow-hidden">
                    <div className="text-indigo-300 p-4 text-center">
                      {/* Image of dashboard will  come here when dashboard is prepared */}
                      <p className="text-sm">
                        Interactive dashboard visualization
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 text-center">
                    <h2 className="text-3xl font-bold text-indigo-400 mb-2">
                      +42%
                    </h2>
                    <h3 className="text-lg font-medium text-gray-300">
                      Customer Retention Rate
                    </h3> 
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-4/5 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 text-center">
                    <h2 className="text-3xl font-bold text-cyan-400 mb-2">
                      -28%
                    </h2>
                    <h3 className="text-lg font-medium text-gray-300">
                      Customer Acquisition Cost
                    </h3>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-2/3 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default AIDriven