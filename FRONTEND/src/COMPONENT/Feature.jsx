import React from "react";
import { Element } from "react-scroll";
import { 
  BarGraphIcon, 
  AudienceIntelligenceIcon, 
  ContentCalendarIcon, 
  LeadGenerationIcon, 
  AIChatbotIcon, 
  SmartCampaignBuilderIcon
} from "../FUNCTION/SVG";
import { CheckCircle } from "lucide-react";

function Feature() {
  return (
    <Element name="Features">
      <div className="w-full text-white overflow-x-hidden min-h-screen relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
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
          <div className="mt-15 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-600 opacity-10 blur-3xl"></div>

            <div className="text-center mb-12 relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 relative">
                Key{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">
                  Features
                </span>
                <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full shadow-lg shadow-indigo-500/50 -translate-x-1/2"></span>
              </h1>
              <p className="text-gray-300 mt-8 max-w-2xl mx-auto">
                Discover our innovative AI-powered tools designed to transform
                your marketing strategy and drive measurable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-[1400px] mx-auto pb-16">
              {[
                {
                  icon: <BarGraphIcon />,
                  title: "Advanced Analytics Dashboard",
                  description:
                    "Real-time visualization of all marketing metrics with AI-powered insights and recommendations.",
                  features: [
                    "Custom performance reports",
                    "Predictive trend analysis",
                    "Interactive data exploration",
                  ],
                },
                {
                  icon: <AudienceIntelligenceIcon />,
                  title: "Audience Intelligence",
                  description:
                    "Deep audience segmentation and behavioral analytics to target the right customers with the right messages.",
                  features: [
                    "360° customer profiles",
                    "Behavioral pattern recognition",
                    "Lookalike audience modeling",
                  ],
                },
                {
                  icon: <SmartCampaignBuilderIcon/>,
                  title: "Smart Campaign Builder",
                  description:
                    "AI-powered campaign creation tool that automates the process of building multi-channel marketing campaigns.",
                  features: [
                    "Drag-and-drop interface",
                    "AI-generated content suggestions",
                    "Multi-channel orchestration",
                  ],
                },
                {
                  icon: <ContentCalendarIcon />,
                  title: "Content Calendar",
                  description:
                    "AI-optimized content planning and scheduling system that ensures consistent, high-performing content.",
                  features: [
                    "Visual planning interface",
                    "Optimal time suggestions",
                    "Content gap analysis",
                  ],
                },
                {
                  icon: <LeadGenerationIcon />,
                  title: "Lead Generation Engine",
                  description:
                    "Automated lead generation system that identifies, qualifies, and nurtures high-quality leads through AI-powered workflows.",
                  features: [
                    "Intelligent lead scoring",
                    "Custom nurture workflows",
                    "Conversion optimization",
                  ],
                },
                {
                  icon: <AIChatbotIcon />,
                  title: "AI Chatbot Assistant",
                  description:
                    "24/7 intelligent customer support and lead qualification chatbot that learns from interactions to improve over time.",
                  features: [
                    "Natural language processing",
                    "Conversational lead qualification",
                    "Human handoff for complex inquiries",
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="hover:scale-105 group bg-slate-800/50 rounded-xl p-5 border border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                >
                  <div className="mb-4 text-indigo-400">
                    {feature.icon}
                  </div>
                  <h2 className="text-2xl mt-4 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-indigo-400 transition-colors duration-300">
                    {feature.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle
                          className="mr-2 text-indigo-400"
                          size={20}
                        />
                        <h3 className="text-indigo-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors duration-300">
                          {feat}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Feature;