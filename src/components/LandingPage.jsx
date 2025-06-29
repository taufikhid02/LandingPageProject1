import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Newsletter from "./Newsletter";
import Cards from "./Cards";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default LandingPage;
