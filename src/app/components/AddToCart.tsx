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
      className="p-2 my-2 rounded-xl w-[75%] bg-light-green/50 hover:bg-light-green shadow-lg"
      onClick={() => addToCart(id, cartContent, setCartContent)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
