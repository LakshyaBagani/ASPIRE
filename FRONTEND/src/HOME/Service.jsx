import React, { useEffect, useState } from "react";

function Service() {
    const [scrollY, setScrollY] = useState(0);
    const [SEO, setSEO] = useState(false);
    const [management, setManagement] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="text-white min-h-screen flex flex-col overflow-hidden">
            {/* Fixed background that doesn't move when scrolling */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 z-0"></div>
            
            {/* Background lines/streaks */}
            <div className="fixed inset-0 z-0 opacity-30">
                {/* Diagonal lines */}
                <div className="absolute w-full h-2 bg-purple-500/20 top-1/4 -rotate-12 transform origin-left"></div>
                <div className="absolute w-full h-1 bg-blue-500/20 top-1/3 -rotate-5 transform origin-left"></div>
                <div className="absolute w-full h-3 bg-indigo-500/20 top-2/3 rotate-12 transform origin-left"></div>
                
                {/* Vertical lines */}
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent left-1/4"></div>
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent left-2/4"></div>
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent left-3/4"></div>
                
                {/* Glowing dots */}
                <div className="absolute w-32 h-32 rounded-full bg-purple-500/10 blur-3xl top-1/4 left-1/4"></div>
                <div className="absolute w-48 h-48 rounded-full bg-blue-500/10 blur-3xl bottom-1/3 right-1/4"></div>
            </div>
            
            {/* Content container */}
            <div className="relative z-10 w-full py-16 px-8">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Grid with all 4 divs in one line */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="relative bg-gray-800 bg-opacity-30 backdrop-blur-md p-8 rounded-xl group transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                                    AI Driven Insights
                                </h1>
                                
                                <div className="transition-all duration-300 ease-in-out">
                                    <ul className="space-y-4 text-gray-300 pl-4 border-l border-purple-500/30">
                                        <li className="hover:text-blue-400 transition-colors duration-300">Customers and behavior analysis</li>
                                        <li className="hover:text-blue-400 transition-colors duration-300">Sales forecasting</li>
                                        <li className="hover:text-blue-400 transition-colors duration-300">Automation consulting</li>
                                    </ul>
                                </div>
                                <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>

                        <div className="relative bg-gray-800 bg-opacity-30 backdrop-blur-md p-8 rounded-xl group transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                                    Content Creation
                                </h1>
                                
                                <div className="transition-all duration-300 ease-in-out">
                                    <ul className="space-y-4 text-gray-300 pl-4 border-l border-purple-500/30">
                                        <li className="hover:text-blue-400 transition-colors duration-300">Blogs and articles</li>
                                        <li className="hover:text-blue-400 transition-colors duration-300">Posts</li>
                                        <li className="hover:text-blue-400 transition-colors duration-300">Videos</li>
                                    </ul>
                                </div>
                                <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>

                        <div className="relative bg-gray-800 bg-opacity-30 backdrop-blur-md p-8 rounded-xl group transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                                    Ad Campaign
                                </h1>
                                
                                <div className="transition-all duration-300 ease-in-out">
                                    <ul className="space-y-4 text-gray-300 pl-4 border-l border-purple-500/30">
                                        <li 
                                            className="hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center"
                                            onClick={() => setSEO(!SEO)}
                                        >
                                            SEO and SEM
                                            <svg 
                                                className={`ml-2 w-4 h-4 transition-transform duration-300 ${SEO ? 'rotate-180' : 'rotate-0'}`} 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </li>
                                        {SEO && (
                                            <div className="pl-6 py-2">
                                                <ul className="space-y-2 text-sm text-gray-400 border-l border-purple-500/20 pl-3">
                                                    <li className="hover:text-blue-400 transition-colors duration-300">Research</li>
                                                    <li className="hover:text-blue-400 transition-colors duration-300">On page reports</li>
                                                    <li className="hover:text-blue-400 transition-colors duration-300">Off page reports</li>
                                                </ul>
                                            </div>
                                        )}
                                        <li 
                                            className="hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center"
                                            onClick={() => setManagement(!management)}
                                        >
                                            Setup
                                            <svg 
                                                className={`ml-2 w-4 h-4 transition-transform duration-300 ${management ? 'rotate-180' : 'rotate-0'}`} 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </li>
                                        {management && (
                                            <div className="pl-6 py-2">
                                                <ul className="space-y-2 text-sm text-gray-400 border-l border-purple-500/20 pl-3">
                                                    <li className="hover:text-blue-400 transition-colors duration-300">Weekly</li>
                                                    <li className="hover:text-blue-400 transition-colors duration-300">Monthly</li>
                                                    <li className="hover:text-blue-400 transition-colors duration-300">Yearly</li>
                                                </ul>
                                            </div>
                                        )}
                                        <li className="hover:text-blue-400 transition-colors duration-300">Performance</li>
                                    </ul>
                                </div>
                                <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>

                        <div className="relative bg-gray-800 bg-opacity-30 backdrop-blur-md p-8 rounded-xl group transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                                    Marketing Strategy
                                </h1>
                                
                                <div className="transition-all duration-300 ease-in-out">
                                    <ul className="space-y-4 text-gray-300 pl-4 border-l border-purple-500/30">
                                        <li className="hover:text-blue-400 transition-colors duration-300">Research and Analysis</li>
                                        <li className="hover:text-blue-400 transition-colors duration-300">Marketing Roadmap</li>
                                        <li className="hover:text-blue-400 transition-colors duration-300">DO IT</li>
                                    </ul>
                                </div>
                                <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;