"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { coffeeType } from "../utils/getBeans";
import { useEffect } from "react";

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
  useEffect(() => {
    if (localStorage.getItem("cart"))
      setCartContent(JSON.parse(localStorage.getItem("cart")!));
  }, []);
  return (
    <CartContext.Provider value={{ cartContent, setCartContent, beans }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
