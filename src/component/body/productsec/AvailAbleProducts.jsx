import React from "react";

import ProductCard from "../UI/ProductCard";
const AvailAbleProducts = ({ products }) => {
  return (
    <div className='max-w-11/12 lg:max-w-8/12 mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8 my-8'>
      {console.log(products)}
      {products.map((product, index) => {
        return (
          <ProductCard product={product} index={index} />
        );
      })}
    </div>
  );
};

export default AvailAbleProducts;
