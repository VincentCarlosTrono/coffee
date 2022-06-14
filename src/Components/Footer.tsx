import React from "react";
import Flag from "../Media/img/footerflag.png";

const Footer = () => {
  const footerInfos = [
    {
      title: "Address",
      detail1: "9897 Hacienda Av.",
      detail2: "Lima, La Libertad 123, Peru",
    },
    {
      title: "Contact",
      detail1: "+987654321",
      detail2: "Coffee@email.com",
    },
    {
      title: "Office",
      detail1: "Monday - Saturday",
      detail2: "9AM - 10PM",
    },
  ];

  return (
    <div className="grid-container bg-dark">
      <div className="container ">
        <div className="  md:flex justify-between border-b-2 py-10">
          <div>
            <h1 className="text-white text-2xl ">Coffee.</h1>
            <p className="text-light py-4">Subscribe to our newsletter</p>
            <div className="flex justify-center items-center md:py-0 py-10 gap-2 ">
              <input
                className="px-10 py-5 rounded-xl"
                type="text"
                placeholder="Your email address"
              />
              <button className="py-4 px-5 bg-orange-500 rounded-xl">
                <div className="rotate-45 hover:-translate-y-1 hover:translate-x-1">
                  <box-icon name="up-arrow-alt"></box-icon>
                </div>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            {footerInfos.map((footerInfo: any) => {
              const { title, detail1, detail2 } = footerInfo;
              return (
                <div className="leading-8">
                  <h1 className="text-white text-2xl">{title}</h1>
                  <p className="text-light hover:text-white">{detail1}</p>
                  <p className="text-light hover:text-white">{detail2}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-10 md:flex justify-between items-center ">
          <div className="flex gap-5">
            <p className="hover:-translate-y-1 hover:opacity-70 hover:cursor-pointer">
              <box-icon color="gray" name="facebook" type="logo"></box-icon>
            </p>
            <p className="hover:-translate-y-1 hover:opacity-70 hover:cursor-pointer">
              <box-icon color="gray" name="instagram" type="logo"></box-icon>
            </p>
            <p className="hover:-translate-y-1 hover:opacity-70 hover:cursor-pointer">
              <box-icon color="gray" name="twitter" type="logo"></box-icon>
            </p>
          </div>
          <div className="flex text-gray-500 md:justify-right md:pt-0 pt-10 justify-center  items-center">
            <box-icon color="gray" name="copyright"></box-icon>
            <p>Vince, All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
