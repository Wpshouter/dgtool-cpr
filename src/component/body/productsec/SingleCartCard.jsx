import React from 'react';
import { toast } from 'react-toastify';

const SingleCartCard = ({cartedProduct,setcartedProduct,setcartItemNumber, cartItemNumber}) => {
    const handleRemoveCard = (product) => {
        //console.log(product);
        const filteredCartProduct = cartedProduct.filter(cartSingleProduct => cartSingleProduct.id != product.id);
        //console.log(filteredCartProduct);
        setcartItemNumber(cartItemNumber - 1);
        setcartedProduct(filteredCartProduct);
        toast(`${product.name} has been removed from the cart.`);
    }
    return (

        cartedProduct.map((product, index) => {
                return(
     <div key={product.id} className='bg-gray-100 my-2 mx-4 rounded-xl p-3'>
            <div className='flex items-center justify-between  p-2'>
                 <div className="flex">
                    <div className="w-15 h-15 p-4 rounded-full bg-white border border-gray-100">
          <img className="w-10" src={product.icon} />{" "}
        </div>
                    <div className='ml-3'>
                        <h2 className='text-xl font-semibold text-gray-800 mb-0'>{product.name}</h2>
                        <p className='text-gray-600' >${product.price}</p>
                    </div>
                 </div>
                 <p onClick={() => handleRemoveCard(product)}  className=' cursor-pointer text-red-500 '>Remove</p>
            </div>
        </div>
                );
        })

   
    );
};

export default SingleCartCard;