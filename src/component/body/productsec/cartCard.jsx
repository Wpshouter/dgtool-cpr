import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import SingleCartCard from './singleCartCard';
import { toast } from 'react-toastify';

const CartCard = ({cartedProduct, setcartedProduct,setcartItemNumber, cartItemNumber}) => {
    console.log(cartedProduct, "cartedProduct");
    console.log(setcartedProduct, "setcartedProduct");
    const totalPrice = cartedProduct.reduce((sum, item) => sum + item.price, 0);
    const handleProccedToChekcout = () => {
        setcartItemNumber(0);
        setcartedProduct([]);
        toast('Checkout is Successfull');
    }
    return (
        
      
        
        (cartedProduct.length === 0) ?
              <div className="max-w-11/12 lg:max-w-8/12 mx-auto grid grid-cols-1 justify-center items-center bg-white border border-gray-50 shadow-sm mb-4 rounded-xl px-4 py-2">
              
                    <h2 className='font-bold text-2xl p-4'>Your Cart</h2>
                    <div className='bg-white p-10 text-center flex flex-col justify-center'>
 <p className='text-center'>  <FiShoppingCart className="text-5xl mb-4 mt-4 text-center text-gray-500 max-w-[50px] mx-auto" /></p>
                     <p className='text-gray-600 mb-4 text-center'>Your cart is empty</p>
                </div>
              </div>
            
        :
             <div className="max-w-11/12 lg:max-w-8/12 mx-auto grid grid-cols-1 justify-center items-center bg-white border border-gray-50 shadow-sm mb-4 rounded-xl px-4 py-2">
              
                    <h2 className='font-bold text-2xl p-4'>Your Cart</h2>
                    <SingleCartCard cartItemNumber={cartItemNumber} setcartItemNumber={setcartItemNumber}  setcartedProduct={setcartedProduct} cartedProduct={cartedProduct} />
                    <div className='flex justify-between items-center mt-4 px-6'>
                        <p className="text-gray-600">Total</p>
                        <strong className='font-bold text-xl'>${totalPrice}</strong>
                    </div>
                     <button onClick={() => handleProccedToChekcout()}
          className=" max-w-[98%] mb-4 mx-auto mt-8 w-full btn py-6  rounded-full text-white btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all duration-300 
   hover:from-[#9514FA] hover:to-[#4F39F6] "
        >
          Proceed to Checkout
        </button>
                </div>
            
        
      
    );
};

export default CartCard;