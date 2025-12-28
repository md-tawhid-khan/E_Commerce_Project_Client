import React from 'react';


type TCartBanner ={
    title:string;
    path:string ;
}
const CartBanner = ({title,path}:TCartBanner) => {
    return (
        <div className={` flex justify-center items-center bg-blue-200 h-48`}>
            <div className='text-center'>
                <h1 className='text-3xl font-extrabold'>{title}</h1>
                <p>{path}</p>
            </div>
        </div>
    );
};

export default CartBanner;