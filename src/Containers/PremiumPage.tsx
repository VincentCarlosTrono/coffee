import React from "react";
import Title from "../Components/Title";
import Premium from "../Components/Premium";
import PremiumPartners from "../Components/PremiumPartners";

const PremiumPage = () => {
  return (
    <div className="grid-container pt-36 md:py-40">
      <div className="container">
        <div className="md:pb-20 pb-10 md:px-0 px-8">
          <Title
            title="We offer a premium and better quality"
            subtitle="preparation just for you!"
          />
        </div>
        <Premium />
        <PremiumPartners />
      </div>
    </div>
  );
};

export default PremiumPage;
