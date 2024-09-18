"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { coffeeType } from "../utils/getBeans";

type ContextType = {
  cartContent: number[];
  setCartContent: Dispatch<SetStateAction<number[]>>;
  beans: Promise<coffeeType[]> | null;
};
const CartContext = createContext<ContextType>({
  cartContent: [],
  setCartContent: () => {},
  beans: null,
});

function CartProvider({
  children,
  beans,
}: {
  children: React.ReactNode;
  beans: Promise<coffeeType[]>;
}) {
  const [cartContent, setCartContent] = useState<number[]>([]);
  return (
    <CartContext.Provider value={{ cartContent, setCartContent, beans }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
