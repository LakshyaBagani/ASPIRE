import { Element } from "react-scroll";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { enterprisePlanFeatures, excludedFeatures, FAQs, growthExcludedFeatures, growthFeatures, starterPlanFeatures } from "../FUNCTION/PricingTexts";

function Pricing() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Element name="Pricing">
      <div className="w-full text-white overflow-x-hidden min-h-screen relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-16">
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

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-visible">
            {" "}
            {/* Changed from overflow-hidden to overflow-visible */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-600 opacity-10 blur-3xl"></div>
            <div className="text-center mb-12 relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 relative">
                Pricing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">
                  Plans
                </span>
                <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full shadow-lg shadow-indigo-500/50 -translate-x-1/2"></span>
              </h1>
              <p className="text-gray-300 mt-8 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs with our
                flexible, value-driven pricing options. All plans include our
                core AI-powered marketing features.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-[1400px] mx-auto px-4 pb-8">
              {" "}

              {/* Starter Plan */}
              <div
                className="w-full max-w-md bg-slate-800/50 rounded-xl p-5 
              border border-indigo-500/20 
              transition-all duration-300 
              hover:border-indigo-500/60 
              hover:shadow-lg 
              hover:shadow-indigo-500/30
              group
              transform hover:-translate-y-1 /* Changed from scale to translate for better visibility */
            "
              >
                <h2
                  className="text-2xl mt-4 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 
                group-hover:from-cyan-400 group-hover:to-indigo-400 
                transition-colors duration-300"
                >
                  Starter Plan
                </h2>
                <p className="text-gray-400 mb-6">
                  Perfect for small businesses getting started with AI-powered
                  marketing.
                </p>
                <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                  Price to be decided
                </h3>
                <button
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold 
                hover:bg-indigo-700 transition-colors mb-6"
                >
                  Get Started
                </button>

                <div className="space-y-2">
                  {starterPlanFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle
                        className="mr-2 text-indigo-400 group-hover:text-indigo-500 transition-colors"
                        size={20}
                      />
                      <h3 className="text-indigo-300 group-hover:text-indigo-200 transition-colors">
                        {feature}
                      </h3>
                    </div>
                  ))}

                  {excludedFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 opacity-30 hover:opacity-70"
                    >
                      <CheckCircle className="mr-2 text-gray-500" size={20} />
                      <h3 className="text-gray-500">{feature}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Plan */}
              <div
                className="w-full max-w-md bg-slate-800/50 rounded-xl p-5 
              border-2 border-cyan-500/30 
              ring-2 ring-cyan-500/20
              transition-all duration-300 
              hover:border-cyan-500/60 
              hover:ring-cyan-500/40
              hover:shadow-lg 
              hover:shadow-cyan-500/30
              group
              relative
              transform hover:-translate-y-1 /* Changed from scale to translate for better visibility */
              z-10 /* Added z-index to ensure it stays above other elements */
            "
              >
                <div
                  className="absolute top-0 right-0 bg-cyan-500 text-white px-3 py-1 
                rounded-bl-xl rounded-tr-xl text-sm font-bold
                group-hover:bg-cyan-600 transition-colors"
                >
                  Most Popular
                </div>
                <h2
                  className="text-2xl mt-4 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400
                group-hover:from-indigo-400 group-hover:to-cyan-400
                transition-colors duration-300"
                >
                  Growth Plan
                </h2>
                <p className="text-gray-400 mb-6">
                  Ideal for growing businesses seeking comprehensive AI
                  marketing solutions.
                </p>
                <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                  Price to be decided
                </h3>
                <button
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg font-bold 
                hover:bg-cyan-700 transition-colors mb-6"
                >
                  Get Started
                </button>

                <div className="space-y-2">
                  {growthFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle
                        className="mr-2 text-cyan-400 group-hover:text-cyan-500 transition-colors"
                        size={20}
                      />
                      <h3 className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                        {feature}
                      </h3>
                    </div>
                  ))}

                  {growthExcludedFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 opacity-30 hover:opacity-70"
                    >
                      <CheckCircle className="mr-2 text-gray-500" size={20} />
                      <h3 className="text-gray-500">{feature}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Plan */}
              <div
                className="w-full max-w-md bg-slate-800/50 rounded-xl p-5 
              border border-indigo-500/20 
              transition-all duration-300 
              hover:border-indigo-500/60 
              hover:shadow-lg 
              hover:shadow-indigo-500/30
              group
              transform hover:-translate-y-1 /* Changed from scale to translate for better visibility */
            "
              >
                <h2
                  className="text-2xl mt-4 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400
                group-hover:from-cyan-400 group-hover:to-indigo-400
                transition-colors duration-300"
                >
                  Enterprise Plan
                </h2>
                <p className="text-gray-400 mb-6">
                  Comprehensive solution for large businesses with advanced
                  marketing needs.
                </p>
                <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                  Price to be decided
                </h3>
                <button
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold 
                hover:bg-indigo-700 transition-colors mb-6"
                >
                  Get Started
                </button>

                <div className="space-y-2">
                  {enterprisePlanFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle
                        className="mr-2 text-indigo-400 group-hover:text-indigo-500 transition-colors"
                        size={20}
                      />
                      <h3 className="text-indigo-300 group-hover:text-indigo-200 transition-colors">
                        {feature}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-white  py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 relative">
                Frequently Asked
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 ml-2 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">
                  Questions
                </span>
                <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full shadow-lg shadow-indigo-500/50 -translate-x-1/2"></span>
              </h1>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Find answers to the most common questions about our platform.
              </p>
            </div>

            {FAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl border border-indigo-500/20 mb-4 overflow-hidden transition-all duration-300"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center p-5 cursor-pointer hover:bg-slate-700/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-indigo-400" size={24} />
                  ) : (
                    <ChevronDown className="text-indigo-400" size={24} />
                  )}
                </div>
                {openIndex === index && (
                  <div className="p-5 pt-0 text-gray-300 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </Element>
  );
}

export default Pricing;
