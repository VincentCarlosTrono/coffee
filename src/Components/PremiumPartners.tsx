import React from "react";
import logo1 from "../Media/img/logocoffee1.png";
import logo2 from "../Media/img/logocoffee2.png";
import logo3 from "../Media/img/logocoffee3.png";
import logo4 from "../Media/img/logocoffee4.png";
import logo5 from "../Media/img/logocoffee5.png";

const PremiumPartners = () => {
  const partners = [
    {
      image: logo1,
    },
    {
      image: logo2,
    },
    {
      image: logo3,
    },
    {
      image: logo4,
    },
    {
      image: logo5,
    },
  ];

  return (
    <div className="md:flex grid grid-cols-3 md:gap-32 py-14 md:pb-0 ">
      {partners.map((partner: any) => {
        const { image } = partner;
        return (
          <div className="hover:opacity-100 hover:cursor-pointer grayscale opacity-50  ">
            <img
              className="h-20 md:h-full md:w-full w-20"
              src={image}
              alt="logos"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PremiumPartners;
