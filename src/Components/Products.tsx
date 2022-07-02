import React from "react";
import { useTranslation } from "react-i18next";
import Title from "./Title";

const Products = () => {
  const { t } = useTranslation();
  const productDetails = [
    {
      name: t("Product.ProductDetails1.Name"),
      product: t("Product.ProductDetails1.Product"),
    },
    {
      name: t("Product.ProductDetails2.Name"),
      product: t("Product.ProductDetails2.Product"),
    },
    {
      name: t("Product.ProductDetails3.Name"),
      product: t("Product.ProductDetails3.Product"),
    },
  ];

  return (
    <>
      <div className="pt-40 ">
        <Title title={t("Product.Title")} />
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
