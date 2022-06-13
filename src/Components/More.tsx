import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATH_PRODUCTS } from "../Constant";
import Specialty1 from "../Media/img/specialty1.png";
import Specialty2 from "../Media/img/specialty2.png";
import Specialty3 from "../Media/img/specialty3.png";
import Title from "./Title";

const More = () => {
  const specialties = [
    {
      image: Specialty1,
      name: "Selected Coffee",
      description: "We select the best premium coffee, for a true taste.",
    },
    {
      image: Specialty2,
      name: "Delicious Cookies",
      description: "Enjoy your coffee with some hot cookies.",
    },
    {
      image: Specialty3,
      name: "Enjoy at Home",
      description: "Enjoy the best coffee in the comfort of your time.",
    },
  ];

  return (
    <div className="grid-container pt-28 pb-20" id="more">
      <div className="container">
        <div className="flex justify-between items-center">
          <Title
            title="Specialty coffee that makes you"
            subtitle="happy and cheer you up!"
          />
          <Link to={ROUTER_PATH_PRODUCTS}>
            <button className="px-10 py-5 bg-black text-white rounded-lg animate-bounce">
              SEE MORE
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-20 justify-center  pt-28 ">
          {specialties.map((specialty: any) => {
            const { image, name, description } = specialty;
            return (
              <div className="border-r-2 h-44  border-light">
                <img
                  className="h-20 hover:-translate-y-1 hover:cursor-pointer"
                  src={image}
                  alt="specialtyImages"
                />
                <h1 className="py-5 text-3xl">{name}</h1>
                <p className="text-gray-500 pr-16">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default More;
