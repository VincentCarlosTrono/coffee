import React from "react";
import { useTranslation } from "react-i18next";
import scroll from "../Media/img/scroll.png";
import home from "../Media/img/home.png";
const Hero = () => {
  const { t } = useTranslation();
  const herodetails = [
    {
      number: "120k",
      title: t("Home.HeroDetails1.Title"),
      detail: t("Home.HeroDetails1.Details"),
    },
    {
      number: "340+",
      title: t("Home.HeroDetails2.Title"),
      detail: t("Home.HeroDetails2.Details"),
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
            {t("Home.Title")}
            <span className="text-orange-400">.</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-xl py-7 md:py-14 border-b-2 max-w-xs md:max-w-sm">
            {t("Home.SubTitle")}
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
