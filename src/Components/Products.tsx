import React from "react";
import Title from "./Title";

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
  return (
    <div className="grid-container">
      <div className="container">
        <div className="pt-40 ">
          <Title title="Choose our delicious and best products" />
        </div>
        <div className="flex justify-between max-w-3xl py-24">
          {productDetails.map((productDetail: any) => {
            const { name, product } = productDetail;
            return (
              <div className="border-r-2 pr-10">
                <h1 className="text-2xl text-gray-500">{name}</h1>
                <p className="text-light">{product}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
