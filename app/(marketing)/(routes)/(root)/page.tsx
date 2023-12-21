import React from "react";
import Hero from "../../_views/Hero";
import Partners from "../../_views/Partners";
import Features from "../../_views/Features";
import Integrations from "../../_views/Integrations";
import Pricing from "../../_views/Pricing";
import Faq from "../../_views/Faq";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Features />
      <Integrations />
      <Pricing />
      <Faq />
    </div>
  );
};

export default HomePage;
