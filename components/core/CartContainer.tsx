import React, { ReactNode } from 'react';

interface ICHContainer{
    children:ReactNode;
    className:string;
}

const CartContainer = ({children, className=""}:ICHContainer) => {
    return (
        <div className={`container mx-auto p-5 ${className}`}>
            {children}
        </div>
    );
};

export default CartContainer;