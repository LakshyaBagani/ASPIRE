import React, { useState, useEffect } from 'react';

function MarketingOutput({ name }) {
  // States for fetched data
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [summary, setSummary] = useState(null);
  const [strategies, setStrategies] = useState([]);
  const [plan, setPlan] = useState(null);
  const [resources, setResources] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  
  useEffect(() => {
    // Fetch the data from the database and remove the below code and write by your own
    
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        
     
        setResponse();
        setSummary({
          title: "Executive Summary",
          content: "Your summary will appear here after analysis"
        });
        setStrategies([]);
        setPlan({
          title: "Implementation Timeline",
          phases: []
        });
        setResources([]);
        setAnalytics({
          roi: 0,
          engagement: 0,
          conversion: 0,
          traffic: 0
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching marketing data:", error);
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [name]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          <p className="mt-4 text-xl font-medium text-indigo-400">Loading your marketing strategy...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-violet-600 opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">Marketing Strategy Dashboard</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full mx-auto"></div>
            <p className="mt-4 text-xl text-white">
              Prepared for: <span className="font-bold underline decoration-2 decoration-indigo-300 underline-offset-4">{name}</span>
            </p>
          </div>
        </div>

        {/* Main container with decorative border */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative border-4 border-indigo-500/30 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-md mb-12">
            
            <div className="relative z-10">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 rounded-lg shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h2 className="ml-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI-Generated Strategy</h2>
                </div>
              </div>

              {/* Analytics Cards */}
              {analytics && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Projected ROI</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{analytics.roi}</span>
                      <span className="ml-1 text-xl text-gray-400">%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Engagement Rate</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{analytics.engagement}</span>
                      <span className="ml-1 text-xl text-gray-400">%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Conversion Rate</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{analytics.conversion}</span>
                      <span className="ml-1 text-xl text-gray-400">%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Traffic Increase</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{analytics.traffic}</span>
                      <span className="ml-1 text-xl text-gray-400">%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Summary Section */}
              {summary && (
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 rounded-lg shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h2 className="ml-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{summary.title}</h2>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 shadow-lg">
                    <p className="text-lg text-gray-200">{summary.content}</p>
                  </div>
                </div>
              )}

              {/* Strategies Section */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 rounded-lg shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h2 className="ml-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Recommended Strategies</h2>
                </div>
                
                {strategies.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {strategies.map((strategy, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold text-gray-100 mb-3">{strategy.title}</h3>
                        <p className="text-gray-300">{strategy.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 shadow-lg text-center">
                    <p className="text-gray-400">Strategy recommendations will appear here after analysis</p>
                  </div>
                )}
              </div>

              {/* Timeline Section */}
              {plan && (
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 rounded-lg shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h2 className="ml-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{plan.title}</h2>
                  </div>
                  
                  {plan.phases.length > 0 ? (
                    <div className="relative">
                      {/* Timeline bar */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-cyan-500"></div>
                      
                      <div className="space-y-8 relative">
                        {plan.phases.map((phase, index) => (
                          <div key={index} className="relative pl-14">
                            {/* Timeline marker */}
                            <div className="absolute left-0 mt-1.5 w-12 h-12 rounded-full flex items-center justify-center bg-gray-900 border-4 border-indigo-500 shadow-lg">
                              <span className="text-xs font-bold text-indigo-300">{index + 1}</span>
                            </div>
                            
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 shadow-lg">
                              <h3 className="text-xl font-semibold text-gray-100 mb-2">{phase.month}</h3>
                              <p className="text-gray-300">{phase.activities}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 shadow-lg text-center">
                      <p className="text-gray-400">Timeline details will appear here after analysis</p>
                    </div>
                  )}
                </div>
              )}

              {/* Resources Section */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 rounded-lg shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <h2 className="ml-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Marketing Resources</h2>
                </div>
                
                {resources.length > 0 ? (
                  <div className="space-y-4">
                    {resources.map((resource, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-4 shadow-lg flex items-center justify-between hover:border-indigo-400/40 transition-all duration-300"
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 bg-indigo-700/30 rounded-lg flex items-center justify-center text-xl">
                            {resource.type === "PDF" ? "📄" : 
                             resource.type === "Excel Sheet" ? "📊" : 
                             resource.type === "ZIP File" ? "🗂️" : "🔗"}
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-100">{resource.name}</h3>
                            <p className="text-sm text-gray-400">{resource.type}</p>
                          </div>
                        </div>
                        <button className="bg-gradient-to-br from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white px-4 py-2 rounded-lg transition-colors duration-300 shadow-lg">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 shadow-lg text-center">
                    <p className="text-gray-400">Marketing resources will appear here after analysis</p>
                  </div>
                )}
              </div>
              
              {/* Bottom decorative line */}
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent my-8"></div>
            </div>
          </div>

          {/* Dashboard Footer with Action Button */}
          <div className="mt-8 bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 shadow-lg text-center">
            <p className="text-gray-300 mb-6">This marketing plan was generated based on your specific business inputs. Refresh your strategy anytime by updating your information.</p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 overflow-hidden z-10">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-xl transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out rounded-md"></span>
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-white/20 rounded-full -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
              <span className="absolute top-0 left-0 w-8 h-8 bg-white/20 rounded-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
              <span className="relative flex items-center text-xl">
                Update Strategy
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingOutput;