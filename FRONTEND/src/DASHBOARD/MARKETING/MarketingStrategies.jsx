import React, { useState } from 'react';
import MarketingInputs from './MarketingInputs';

function Dashboard() {

  const [AIText,setAIText] = useState(false);

  return (
    <div className="text-white min-h-screen w-full relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-x-hidden">
      {/* Background effects */}
        {!AIText && <MarketingInputs AIText={AIText}/>}
    </div>
  );
}

export default Dashboard;