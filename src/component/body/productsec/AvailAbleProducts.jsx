import React, { useState } from "react";

import ProductCard from "../UI/ProductCard";
import CartCard from "./cartCard";
const AvailAbleProducts = ({ products, setcartItemNumber, cartItemNumber }) => {
  const [productOrCart, setproductOrCart ] = useState('product');
  const [cartedProduct, setcartedProduct] = useState([]);
  return (
    
    <div className=''>
        <div>
        <h2 className='text-4xl font-extrabold text-gray-900 mt-12 mb-6 text-center'>Premium Digital Tools</h2>
         <p className="text-gray-600 mb-4 text-center">
            Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.
          </p>
          <div className="flex items-center gap-6 mb-4 justify-center">
                <button onClick={()=>setproductOrCart('product')}
                  className=
                  {`btn rounded-full btn-md  ${productOrCart === 'product' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white " : '' }  shadow-md`} 
                  >Products
                 </button>
                <button onClick={()=>setproductOrCart('cart')}
                  className={`btn rounded-full btn-md border border-gray-50 ${productOrCart === 'cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white " : '' } `} 
                  >Cart ({cartItemNumber})
                </button>
          </div>
      </div>
      {
        (productOrCart === 'product') ?
          <div className="max-w-11/12 lg:max-w-10/12 mx-auto grid grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-8 my-8">
              {console.log(products)}
    
      {products.map((product, index) => {
        return (
          <ProductCard product={product} key={product.id} setcartItemNumber={setcartItemNumber} cartItemNumber={cartItemNumber} cartedProduct={cartedProduct} setcartedProduct={setcartedProduct} />
        );
      })}
      </div>
      :
      <CartCard  cartItemNumber={cartItemNumber}  cartedProduct={cartedProduct} setcartedProduct={setcartedProduct} setcartItemNumber={setcartItemNumber} />
      }
    
  
    </div>
  );
};

export default AvailAbleProducts;
