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
    <>
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
    </>
  );
};

export default Products;
