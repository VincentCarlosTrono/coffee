import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Title from "./Title";
import Specialty1 from "../Media/img/specialty1.png";
import Specialty2 from "../Media/img/specialty2.png";
import Specialty3 from "../Media/img/specialty3.png";
import { ROUTER_PATH_PRODUCTS } from "../Constant";

const More = () => {
  const { t } = useTranslation();
  const specialties = [
    {
      image: Specialty1,
      name: t("More.Specialties1.Name"),
      description: t("More.Specialties1.Description"),
    },
    {
      image: Specialty2,
      name: t("More.Specialties2.Name"),
      description: t("More.Specialties2.Description"),
    },
    {
      image: Specialty3,
      name: t("More.Specialties3.Name"),
      description: t("More.Specialties3.Description"),
    },
  ];

  return (
    <div className="grid-container pt-28 pb-20" id="more">
      <div className="container">
        <div className="md:flex justify-between items-center">
          <div className="py-5 md:py-0">
            <Title title={t("More.Title")} subtitle={t("More.SubTitile")} />
          </div>

          <Link to={ROUTER_PATH_PRODUCTS}>
            <button className=" text-sm md:text-lg px-5 py-3 md:px-10 md:py-5 bg-black text-white rounded-lg md:animate-bounce">
              {t("Common.See-More")}
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20  py-10 text-center md:text-left  md:pt-28 ">
          {specialties.map((specialty: any) => {
            const { image, name, description } = specialty;
            return (
              <div className="md:border-r-2 h-44  border-light ">
                <div className="flex justify-center">
                  <img
                    className="h-20 hover:-translate-y-1 hover:cursor-pointer"
                    src={image}
                    alt="specialtyImages"
                  />
                </div>
                <h1 className="md:py-5 py-3 text-2xl md:text-3xl">{name}</h1>
                <p className="text-gray-500 md:pr-16">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default More;
