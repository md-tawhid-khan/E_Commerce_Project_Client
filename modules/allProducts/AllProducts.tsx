/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from '@/components/core/ProductCard';
import React from 'react';




const AllProducts = ({products}:{products:any}) => {

  // console.log(products) ;
    return (
       
        <div className='my-28'>
           
              <div className="grid grid-cols-3 gap-16">
          {
            products?.map((product:any, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>
        </div>
       
    );
};

export default AllProducts;