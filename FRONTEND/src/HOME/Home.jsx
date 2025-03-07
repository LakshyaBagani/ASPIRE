import React from "react";
import LandingPage from "./LandingPage";
import Service from "./Service";
import About from "./About";

function Home() {
  return (
    
    <div className="bg-gradient-to-br from-black via-[#1a0030] to-black text-white overflow-x-hidden min-h-screen min-w-full relative">
      <LandingPage/>
      <About/>
      <Service/>
    </div>
      
    
  );
}

export default Home;
