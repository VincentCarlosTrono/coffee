import React from "react";
import { Link } from "react-router-dom";
import home from "../Media/img/home.png";
import { ROUTER_PATH_HOME, ROUTER_PATH_PRODUCTS } from "../Constant";

const Premium = () => {
  return (
    <div className="md:flex gap-36 md:pt-48 w-full justify-between border-b-2 pb-24">
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
          We are delighted with our coffee. That's why you get the best premium
          coffee plus the kettle made of resistant materials that you see in the
          image. for a special price.
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
  );
};

export default Premium;
