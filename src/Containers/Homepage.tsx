import React from "react";
import Hero from "../Components/Hero";
import More from "../Components/More";

const Homepage = () => {
  return (
    <>
      <Hero />
      <More />
      <div className="background absolute"></div>
    </>
  );
};

export default Homepage;
