import React, { useState } from 'react';
function MarketingInputs() {

    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [goal, setGoal] = useState('');
    const [challenge, setChallenge] = useState('');
    const [audience, setAudience] = useState('');
    const [time, setTime] = useState('');
    const [budget, setBudget] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setAIText(true)
      setTimeout(() => {
        setIsLoading(false);
        // Handle form submission logic here
      }, 2000);
    };

    
  return (
    <div>
        <div>
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
           <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
           <div className="absolute bottom-40 -right-20 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
           <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-violet-600 opacity-20 blur-3xl"></div>
         </div>
   
         <div className="container max-w-7xl mx-auto px-4 py-12 relative z-10">
           <div className="mb-12 text-center">
             <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
               Analytical Dashboard
             </h1>
             <div className="h-1 w-32 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full mx-auto"></div>
             <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
               Complete the form below to receive your customized marketing strategy based on your business needs.
             </p>
           </div>
   
           <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/30 shadow-xl">
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-6">
                 <div>
                   <label className="block text-lg font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                     Your Business Name
                   </label>
                   <input
                     required
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Business Name"
                     className="w-full bg-slate-800/50 border border-indigo-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                   />
                 </div>
   
                 <div>
                   <label className="block text-lg font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                     Which type of industry are you in?
                   </label>
                   <input
                     type="text"
                     required
                     value={industry}
                     onChange={(e) => setIndustry(e.target.value)}
                     placeholder="Industry Type"
                     className="w-full bg-slate-800/50 border border-indigo-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                   />
                 </div>
   
                 <div>
                   <label className="block text-lg font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                     What is your Goal?
                   </label>
                   <textarea
                     value={goal}
                     required
                     onChange={(e) => setGoal(e.target.value)}
                     placeholder="Your goals"
                     className="w-full bg-slate-800/50 border border-indigo-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 h-24"
                   ></textarea>
                 </div>
   
                 <div>
                   <label className="block text-lg font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                     What are the challenges you are facing?
                   </label>
                   <textarea
                     value={challenge}
                     required
                     onChange={(e) => setChallenge(e.target.value)}
                     placeholder="Challenges"
                     className="w-full bg-slate-800/50 border border-indigo-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 h-24"
                   ></textarea>
                 </div>
   
                 <div>
                   <label className="block text-lg font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                     What is your target audience?
                   </label>
                   <input
                     type="text"
                     value={audience}
                     required
                     onChange={(e) => setAudience(e.target.value)}
                     placeholder="Target audience"
                     className="w-full bg-slate-800/50 border border-indigo-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                   />
                 </div>
   
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-lg font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                       Time frame to achieve your goal?
                     </label>
                     <input
                       type="number"
                       value={time}
                       required
                       onChange={(e) => setTime(e.target.value)}
                       placeholder="Time Frame"
                       className="w-full bg-slate-800/50 border border-indigo-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                     />
                   </div>
   
                   <div>
                     <label className="block text-lg font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                       How much can you spend?
                     </label>
                     <input
                       type="text"
                       required
                       value={budget}
                       onChange={(e) => setBudget(e.target.value)}
                       placeholder="Your Budget"
                       className="w-full bg-slate-800/50 border border-indigo-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                     />
                   </div>
                 </div>
               </div>
   
               <div className="pt-4">
                 <button
                   type="submit"
                   disabled={isLoading}
                   className="group relative w-full inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 overflow-hidden z-10"
                 >
                   <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-xl transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out rounded-md"></span>
                   <span className="absolute bottom-0 right-0 w-8 h-8 bg-white/20 rounded-full -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
                   <span className="absolute top-0 left-0 w-8 h-8 bg-white/20 rounded-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></span>
                   <span className="relative flex items-center text-xl">
                     {isLoading ? (
                       <>
                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                         </svg>
                         Processing...
                       </>
                     ) : (
                       'Get Your Strategy'
                     )}
                   </span>
                 </button>
               </div>
             </form>
           </div>
         </div>
       </div>
    </div>
  )
}

export default MarketingInputs