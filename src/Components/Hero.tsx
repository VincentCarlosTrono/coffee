import React from "react";
import { Link } from "react-router-dom";
import scroll from "../Media/img/scroll.png";

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
    <div className="grid-container py-8.6  bg-gradient-to-tl from-darkgray to-lightgray ">
      <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-44.5 z-10 w-48 animate-bounce ">
        <a href="#more">
          <img src={scroll} alt="home" />
        </a>
      </div>
      <div className="container w-1/2 ">
        <h1 className="text-6xl max-w-md text-white font-semibold leading-tight">
          Choose Your Favorite Coffee And Enjoy
          <span className="text-orange-400">.</span>
        </h1>

        <p className="text-gray-300 text-xl py-14 border-b-2 max-w-sm">
          Buy the best and delicious coffees.
        </p>
        <div className="flex gap-10 pr-10">
          {herodetails.map((herodetail: any) => {
            const { number, title, detail } = herodetail;
            return (
              <div>
                <div className="py-7 ">
                  <h1 className="text-orange-400 py-10 text-5xl ">{number}</h1>
                  <p className="text-white font-semibold text-2xl">{title}</p>
                  <p className="text-gray-400 text-lg py-6">{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
