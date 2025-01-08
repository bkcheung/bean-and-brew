"use client";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

function addToCart(
  id: number,
  qty: number = 1,
  cartContent: number[],
  setCartContent: Dispatch<SetStateAction<number[]>>,
) {
  const updatedCart = structuredClone(cartContent);
  if (cartContent[id] === undefined) {
    updatedCart[id] = qty;
    setCartContent(updatedCart);
  } else {
    updatedCart[id] += qty;
    setCartContent(updatedCart);
  }
  toast.success(<Msg text="Added to Cart!" />);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
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
    toast.success(<Msg text="Removed from Cart!" />);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
}
function numItems(cartContent: number[]) {
  if (cartContent.length === 0) return 0;
  return cartContent.reduce((partialSum, a) => partialSum + a);
}
interface MsgProps {
  text: string;
}
const Msg = ({ text }: MsgProps) => {
  return (
    <div className="flex justify-between w-full">
      <div className="mx-2">{text}</div>
      <Link
        href="/cart"
        aria-label="cart"
        className="mx-2 hover:text-dark-green underline"
      >
        View Cart
      </Link>
    </div>
  );
};
export { addToCart, removeFromCart, numItems };
