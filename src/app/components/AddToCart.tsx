"use client";
import { useContext } from "react";
import { CartContext } from "../context";
import { addToCart } from "../utils/cartFunctions";

interface addCartProps {
  id: number;
}
const AddToCart = ({ id }: addCartProps) => {
  const { cartContent, setCartContent } = useContext(CartContext);
  return (
    <button
      className="bg-white p-2 m-2 rounded-sm hover:bg-light-green/50 w-[75%]"
      style={{ border: "2px, outset, rgb(200 200 200 / 0.85)" }}
      onClick={() => addToCart(id, cartContent, setCartContent)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
