import React from "react";
import Products from "../Components/Products";
import ProductsItems from "../Components/ProductItems";

const ProductsPage = () => {
  return (
    <div className="grid-container bg-bgGray">
      <div className="container">
        <Products />
        <ProductsItems />
      </div>
    </div>
  );
};

export default ProductsPage;
