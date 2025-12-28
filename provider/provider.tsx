"use client"

import StoreProvider from "./storeProvider";

const Providers = ({children}:{children: React.ReactNode;}) => {
    return (
       
            <StoreProvider>
                 {children}
            </StoreProvider>          
       
    );
};

export default Providers;