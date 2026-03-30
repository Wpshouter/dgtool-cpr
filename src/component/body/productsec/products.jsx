import React from 'react';
import { use } from 'react';
import AvailAbleProducts from './AvailAbleProducts';
const Product = ({productPromise}) => {
    //console.log(productPromise);
    const products = use(productPromise);
   // console.log(data);
    return (
        <div>
          
            <AvailAbleProducts products={products} />
        </div>
    );
};

export default Product;