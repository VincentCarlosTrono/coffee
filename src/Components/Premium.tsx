import React from "react";
import Title from "./Title";
import home from "../Media/img/home.png";
import logo1 from "../Media/img/logocoffee1.png";
import logo2 from "../Media/img/logocoffee2.png";
import logo3 from "../Media/img/logocoffee3.png";
import logo4 from "../Media/img/logocoffee4.png";
import logo5 from "../Media/img/logocoffee5.png";

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
    <div className="grid-container py-40">
      <div className="container">
        <div className="pb-20">
          <Title
            title="We offer a premium and better quality"
            subtitle="preparation just for you!"
          />
        </div>
        <div className="flex gap-36 w-full justify-between border-b-2 pb-24">
          <div className="w-1/2 h-28rem rounded-lg overflow-hidden">
            <img
              className=" w-full h-full rounded-lg"
              src={home}
              alt="premiumhomeimage"
            />
          </div>
          <div className="w-1/2">
            <div>
              <h1 className="text-5xl pb-10 font-semibold">Premium Coffee</h1>
              <h1 className="text-5xl font-semibold ">$94.99</h1>
              <p className="text-gray-500 pb-5">Especial Price</p>
            </div>
            <p className="max-w-xl pb-7">
              We are delighted with our coffee. That's why you get the best
              premium coffee plus the kettle made of resistant materials that
              you see in the image. for a special price.
            </p>
            <div className="flex">
              <button className="py-3 px-7 bg-darkGray text-white rounded-md">
                BUY NOW
              </button>
              <button className="py-3 px-7 items-center flex">
                SEE MORE <box-icon type="solid" name="chevron-right"></box-icon>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-32 pt-14 ">
          {partners.map((partner: any) => {
            const { image } = partner;
            return (
              <div className="hover:opacity-100 hover:cursor-pointer grayscale opacity-50 ">
                <img src={image} alt="logos" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Premium;
