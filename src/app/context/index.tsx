'use client'
import { createContext, useContext, useState, Dispatch, SetStateAction} from 'react';

type Context = {
    cartContent: string[],
    setCartContent: Dispatch<SetStateAction<string[]>>
}

const CartContext = createContext<Context>({cartContent:[''], setCartContent:()=>{}});

function CartProvider({children}:{children: React.ReactNode;}){
    const [cartContent, setCartContent] = useState<string[]>(['Product 1','Product 2']);
    return(
        <CartContext.Provider value={{cartContent, setCartContent}}>
            {children}
        </CartContext.Provider>
    )
}
function useCartContext(){
    return useContext(CartContext)
}

export {CartContext, CartProvider, useCartContext}