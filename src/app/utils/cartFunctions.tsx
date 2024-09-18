"use client";
import { useContext, Dispatch, SetStateAction } from "react";
import { CartContext } from "../context";

function addToCart(
  id: number,
  cartContent: number[],
  setCartContent: Dispatch<SetStateAction<number[]>>,
) {
  // const { cartContent, setCartContent } = useContext(CartContext);
  const updatedCart = structuredClone(cartContent);
  if (cartContent[id] === undefined) {
    updatedCart[id] = 1;
    setCartContent(updatedCart);
  } else {
    updatedCart[id]++;
    setCartContent(updatedCart);
  }
}
function removeFromCart(
  id: number,
  cartContent: number[],
  setCartContent: Dispatch<SetStateAction<number[]>>,
) {
  // const { cartContent, setCartContent } = useContext(CartContext);
  const updatedCart = structuredClone(cartContent);
  if (cartContent[id] !== undefined) {
    updatedCart[id]--;
    setCartContent(updatedCart);
  }
}
export { addToCart, removeFromCart };
