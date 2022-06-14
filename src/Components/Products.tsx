import React from "react";
import Title from "./Title";
import Delicacy1 from "../Media/img/delicacies1.png";
import Delicacy2 from "../Media/img/delicacies2.png";
import Delicacy3 from "../Media/img/delicacies3.png";

const Products = () => {
  const productDetails = [
    {
      name: "New Delicacies",
      product: "3 Products",
    },
    {
      name: "Hot Coffee",
      product: "4 Products",
    },
    {
      name: "Cakes And Delicacies",
      product: "4 Products",
    },
  ];

  const productItems = [
    {
      image: Delicacy1,
      price: "$5",
      name: "Cookies",
    },
    {
      image: Delicacy2,
      price: "$6",
      name: "Croissant",
    },
    {
      image: Delicacy3,
      price: "$4",
      name: "Pretzel",
    },
  ];

  return (
    <div className="grid-container bg-bgGray">
      <div className="container">
        <div className="pt-40 ">
          <Title title="Choose our delicious and best products" />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5 md:gap-10 max-w-3xl py-12 md:py-24">
          {productDetails.map((productDetail: any) => {
            const { name, product } = productDetail;
            return (
              <div className="border-r-2 md:pr-10">
                <h1 className="text-xl md:text-2xl text-gray-500 hover:text-gray-800 hover:cursor-pointer">
                  {name}
                </h1>
                <p className="text-light">{product}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-14 md:px-0 gap-10 md:gap-20 justify-between max-w-5xl pb-20">
          {productItems.map((productItem: any) => {
            const { image, price, name } = productItem;
            return (
              <div className="relative">
                <div className="bg-lighter md:py-10 px-8 rounded-t-lg ">
                  <img
                    className="h-52 hover:-translate-y-2 hover:cursor-pointer "
                    src={image}
                    alt="productImages"
                  />
                </div>
                <div className="absolute right-5 bottom-20 bg-darkGray rounded-full items-center px-3 py-2">
                  <box-icon color="white" name="shopping-bag"></box-icon>
                </div>
                <div className="bg-white rounded-b-lg p-5">
                  <h1 className="text-2xl">{price}</h1>
                  <p className="text-xl ">{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
