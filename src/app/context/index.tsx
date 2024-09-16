'use client'
import { createContext, useState, Dispatch, SetStateAction} from 'react';

type ContextType = {
    cartContent: string[],
    setCartContent: Dispatch<SetStateAction<string[]>>
}

const CartContext = createContext<ContextType>({cartContent:[''], setCartContent:()=>{}});

function CartProvider({children}:{children: React.ReactNode;}){
    const [cartContent, setCartContent] = useState<string[]>(['Product 1','Product 2']);
    return(
        <CartContext.Provider value={{cartContent, setCartContent}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}