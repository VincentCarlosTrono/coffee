import React from "react";
import scroll from "../Media/img/scroll.png";
import home from "../Media/img/home.png";

const Hero = () => {
  const herodetails = [
    {
      number: "120k",
      title: "Testimonials",
      detail: "Testimonials from various customers who trust.",
    },
    {
      number: "340+",
      title: "Exclusive Product",
      detail: "Premium preparation with quality ingredients.",
    },
  ];
  return (
    <div>
      <div className="grid-container md:py-10rem  bg-gradient-to-tl from-darkgray to-lightgray ">
        <div className="absolute md:block hidden top-1/2 -translate-x-1/2 -translate-y-1/2 left-44.5 z-10 w-48 animate-bounce ">
          <a href="#more">
            <img src={scroll} alt="home" />
          </a>
        </div>
        <div className="container md:w-1/2 ">
          <h1 className="md:text-6xl text-4xl max-w-md text-white font-semibold leading-tight md:pt-0 pt-28">
            Choose Your Favorite Coffee And Enjoy
            <span className="text-orange-400">.</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-xl py-7 md:py-14 border-b-2 max-w-xs md:max-w-sm">
            Buy the best and delicious coffees.
          </p>
          <div className="flex md:gap-10 gap-5 pr-5 md:pr-10">
            {herodetails.map((herodetail: any) => {
              const { number, title, detail } = herodetail;
              return (
                <div>
                  <div className="py-7 ">
                    <h1 className="text-orange-400 py-5 md:py-10 text-3xl md:text-5xl ">
                      {number}
                    </h1>
                    <p className="text-white font-semibold text-lg md:text-2xl">
                      {title}
                    </p>
                    <p className="text-gray-400 text-md md:text-lg py-6">
                      {detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:hidden block h-1/2">
        <img src={home} alt="homeimage" />
      </div>
    </div>
  );
};

export default Hero;
