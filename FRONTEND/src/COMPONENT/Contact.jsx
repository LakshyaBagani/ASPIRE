import React, { useState } from "react";
import { Element } from "react-scroll";
import { CheckCircle, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { FacebookSvg, InstaSvg, LinkdinSvg, TwitterSvg } from "../FUNCTION/SVG";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [businessNeed, setBusinessNeed] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const preferenceOptions = [
    "Ad Campaign Optimization",
    "AI Driven Business Analytics",
    "Marketing Strategy",
    "Content Management",
    "Lead Generation",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (privacyConsent && preferences.length > 0) {
      console.log("Form submitted", {
        name,
        email,
        companyName,
        preferences,
        businessNeed,
      });
    } else {
      alert(
        preferences.length === 0
          ? "Please select at least one preference"
          : "Please agree to the Privacy Policy"
      );
    }
  };

  const HandleDirectMeetingBook = (e) => {
    e.preventDefault();
    alert("HI");
  };

  return (
    <Element name="Contact">
      <div className="text-white overflow-x-hidden min-h-screen w-full relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-16">
        {/* Refined Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-40 -right-20 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-violet-600 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
              Get In
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 ml-2">
                Touch
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4"></div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto px-4 mt-2">
            Ready to transform your marketing strategy? Schedule a demo, book a
            consultation, or chat with our team to explore how Aspire can help
            grow your business.
          </p>
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Form Column */}
            <div className="md:col-span-2 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 space-y-6 border border-indigo-500/20">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Schedule a Free Demo
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />

                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />

                <input
                  type="text"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  placeholder="Company Name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />

                <div className="relative">
                  <select
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      if (selectedValue !== "") {
                        setPreferences((prev) =>
                          prev.includes(selectedValue)
                            ? prev
                            : [...prev, selectedValue]
                        );
                      }
                    }}
                    className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Service You're Interested in
                    </option>
                    {preferenceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  onChange={(e) => setBusinessNeed(e.target.value)}
                  value={businessNeed}
                  placeholder="Tell us about your business needs"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg min-h-[120px] border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />

                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={() => setPrivacyConsent(!privacyConsent)}
                    className="form-checkbox h-5 w-5 text-cyan-500 bg-gray-900/50 border-transparent rounded focus:ring-cyan-500"
                  />
                  <span className="text-gray-300">
                    I agree to the Privacy Policy and consent to being
                    contacted about Aspire services.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={!privacyConsent}
                  className="w-full py-3 rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-br from-indigo-600 to-cyan-500 text-white hover:from-indigo-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Schedule Demo
                </button>
              </form>
            </div>

            {/* Side Columns */}
            <div className="md:col-span-1 space-y-6">
              {/* Book a Meeting Directly */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 transition-all duration-500 hover:translate-y-[-8px] hover:scale-105">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Book a Meeting Directly
                </h3>
                <p className="text-gray-300 mb-1">Provide us your Number</p>
                <div className="text-gray-400 mb-4">
                  Our team will reach you within an hour
                </div>
                <form onSubmit={HandleDirectMeetingBook}>
                  <input
                    type="tel"
                    value={customerNumber}
                    onChange={(e) => setCustomerNumber(e.target.value)}
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 mb-4 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                  />
                  <button
                    onClick={HandleDirectMeetingBook}
                    className="w-full py-3 rounded-lg bg-gray-900/50 backdrop-blur-sm text-white border border-indigo-500/20 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 transition-all duration-500 hover:translate-y-[-8px] hover:scale-105">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-cyan-500" size={24} />
                    <div>
                      <h4 className="text-gray-300">Phone</h4>
                      <p className="text-white">7898789878</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-cyan-500" size={24} />
                    <div>
                      <h4 className="text-gray-300">Email</h4>
                      <p className="text-white">Aspire@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-cyan-500" size={24} />
                    <div>
                      <h4 className="text-gray-300">Address</h4>
                      <p className="text-white">
                        Scaler School Of Technology
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="mt-6 flex space-x-4">
                  <a
                    href=""
                    className="text-white hover:text-cyan-500 transition-colors"
                  >
                    <FacebookSvg />
                  </a>
                  <a
                    href=""
                    className="text-white hover:text-cyan-500 transition-colors"
                  >
                    <InstaSvg />
                  </a>
                  <a
                    href=""
                    className="text-white hover:text-cyan-500 transition-colors"
                  >
                    <LinkdinSvg />
                  </a>
                  <a
                    href=""
                    className="text-white hover:text-cyan-500 transition-colors"
                  >
                    <TwitterSvg />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        
      </div>
    </Element>
  );
}

export default Contact;