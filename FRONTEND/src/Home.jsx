import React from "react";
import LandingPage from "./HOME/LandingPage";
import Service from "./HOME/Service";
import About from "./HOME/About";
import Navbar from "./HOME/Navbar";
import { Element } from "react-scroll";
import Pricing from "./HOME/Pricing";
import Contact from "./HOME/Contact";
import Feature from "./HOME/Feature";

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
