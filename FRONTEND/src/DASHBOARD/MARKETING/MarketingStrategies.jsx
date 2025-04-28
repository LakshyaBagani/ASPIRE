import React, { useState } from 'react';
import MarketingInputs from './MarketingInputs';
import MarketingOutput from './MarketingOutput';

function Dashboard() {
  const [AIText, setAIText] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className="text-white min-h-screen w-full relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-x-hidden">
      {!AIText && (
        <MarketingInputs
          name={name}
          setName={setName} 
          setAIText={setAIText} 
        />
      )}
      {AIText && <MarketingOutput name={name} />}
      
    </div>
  );
}

export default Dashboard;
