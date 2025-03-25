import React from "react";
import LandingPage from "./COMPONENT/LandingPage";
import Service from "./COMPONENT/Service";
import About from "./COMPONENT/About";
import Navbar from "./COMPONENT/Navbar";
import { Element } from "react-scroll";
import Pricing from "./COMPONENT/Pricing";
import Contact from "./COMPONENT/Contact";
import Feature from "./COMPONENT/Feature";

function Home() {
  return (
    <Element name="Home">
      <div className="text-white overflow-x-hidden min-h-screen w-full relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        <Navbar />
        <LandingPage />
        <About />
        <Service />
        <Feature/>
        <Pricing/>
        <Contact/>
      </div>
    </Element>
  );
}

export default Home;
