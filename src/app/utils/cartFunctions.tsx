"use client";
import { Dispatch, SetStateAction } from "react";

function addToCart(
  id: number,
  cartContent: number[],
  setCartContent: Dispatch<SetStateAction<number[]>>,
) {
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
  const updatedCart = structuredClone(cartContent);
  if (cartContent[id] !== undefined && cartContent[id] !== 0) {
    updatedCart[id]--;
    setCartContent(updatedCart);
  }
}
function numItems(cartContent: number[]) {
  if (cartContent.length === 0) return 0;
  return cartContent.reduce((partialSum, a) => partialSum + a);
}
export { addToCart, removeFromCart, numItems };
