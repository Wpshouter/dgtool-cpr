import React from 'react';

const SingleCartCard = ({cartedProduct}) => {
    return (

        cartedProduct.map((product, index) => {
                return(
     <div key={index} className='bg-gray-100 my-2 mx-4 rounded-xl p-3'>
            <div className='flex items-center justify-between  p-2'>
                 <div class="flex">
                    <div className="w-15 h-15 p-4 rounded-full bg-white border border-gray-100">
          <img className="w-10" src={product.icon} />{" "}
        </div>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 mb-2'>{product.name}</h2>
                        <p className='text-gray-600' >${product.price}</p>
                    </div>
                 </div>
                 <p className=' cursor-pointer text-red-500 '>Remove</p>
            </div>
        </div>
                );
        })

   
    );
};

export default SingleCartCard;