import React from "react";
import Title from "./Title";
import home from "../Media/img/home.png";
import logo1 from "../Media/img/logocoffee1.png";
import logo2 from "../Media/img/logocoffee2.png";
import logo3 from "../Media/img/logocoffee3.png";
import logo4 from "../Media/img/logocoffee4.png";
import logo5 from "../Media/img/logocoffee5.png";
import { ROUTER_PATH_HOME, ROUTER_PATH_PRODUCTS } from "../Constant";
import { Link } from "react-router-dom";

const Premium = () => {
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
    <div className="grid-container pt-36 md:py-40">
      <div className="container">
        <div className="md:pb-20 pb-10 md:px-0 px-8">
          <Title
            title="We offer a premium and better quality"
            subtitle="preparation just for you!"
          />
        </div>
        <div className="md:flex gap-36 w-full justify-between border-b-2 pb-24">
          <div className="md:w-1/2 h-1/2 md:h-28rem rounded-lg overflow-hidden md:px-0 px-10">
            <img
              className=" md:w-full md:h-full rounded-lg"
              src={home}
              alt="premiumhomeimage"
            />
          </div>
          <div className="md:w-1/2 pt-10 md:pt-0">
            <div>
              <h1 className="md:text-5xl text-3xl pb-5 md:pb-10 font-semibold">
                Premium Coffee
              </h1>
              <h1 className="md:text-5xl text-3xl font-semibold ">$94.99</h1>
              <p className="text-gray-500 pb-3 md:pb-5">Especial Price</p>
            </div>
            <p className="max-w-xl pb-7 text-gray-500">
              We are delighted with our coffee. That's why you get the best
              premium coffee plus the kettle made of resistant materials that
              you see in the image. for a special price.
            </p>
            <div className="flex">
              <Link to={ROUTER_PATH_HOME}>
                <button className="py-3 px-7 hover:bg-gray-800 bg-darkGray text-white rounded-md">
                  BUY NOW
                </button>
              </Link>
              <Link to={ROUTER_PATH_PRODUCTS}>
                <button className="py-3 px-7 items-center flex ">
                  SEE MORE
                  <div className="hover:translate-x-2 flex items-center">
                    <box-icon type="solid" name="chevron-right"></box-icon>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Premium;
