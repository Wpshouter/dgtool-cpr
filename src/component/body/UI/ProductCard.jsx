import React, { useState } from "react";
import designTool from "../../../assets/products/design-tool.png";
import { FaCheck } from "react-icons/fa";
const ProductCard = ({ product, index, setcartItemNumber, cartItemNumber, cartedProduct, setcartedProduct }) => {
  const [isCarted, setisCarted] = useState(false);
  const handleCartProduct = (e)=>{
    console.log(e, 'asdsadsad');
    e.preventDefault();
      setisCarted(true);
      setcartItemNumber(cartItemNumber+1);
      setcartedProduct([...cartedProduct, product]);
  }

  return (
    <div
      key={index}
      className="card bg-base-100 shadow-sm rounded-xl border border-gray-100 px-6 pb-6 pt-1"
    >
      <div className="card-body p-2">
        <div className="text-right w-full">
          <div className="badge badge-warning ">{product.tag}</div>
        </div>

        <div className="w-15 h-15 p-4 rounded-full border border-gray-100">
          <img className="w-10" src={product.icon} />{" "}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
        <p className="text-gray-600 my-3">{product.description}</p>
        <span>
          <strong className="font-bold text-gray-900 text-xl">
            ${product.price}
          </strong>
          <span className="text-gray-600">/{product.period}</span>
        </span>
        {product.features.map((feature, indx) => {
          return (
            <span key={indx} className="text-gray-600 flex gap-2 items-center">
              <span className="text-green-500">
                <FaCheck />
              </span>
              {feature}
            </span>
          );
        })}

        <button
          onClick={(e) => handleCartProduct(e)}
          className=" mt-8 w-full btn rounded-full text-white btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all duration-300 
   hover:from-[#9514FA] hover:to-[#4F39F6] "
        >
          {isCarted === false ? "Buy Now" : "Added to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
