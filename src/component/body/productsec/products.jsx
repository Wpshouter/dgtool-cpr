import React from 'react';
import { use } from 'react';
import AvailAbleProducts from './AvailAbleProducts';
const Product = ({productPromise, setcartItemNumber, cartItemNumber}) => {
    //console.log(productPromise);
    const products = use(productPromise);
   // console.log(data);
    return (
        <div>
          
            <AvailAbleProducts products={products} setcartItemNumber={setcartItemNumber} cartItemNumber={cartItemNumber} />
        </div>
    );
};

export default Product;