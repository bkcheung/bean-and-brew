"use client";
import { useContext, useState } from "react";
import { CartContext } from "../context";
import { addToCart } from "../utils/cartFunctions";
import cx from "classnames";

interface addCartProps {
  id: number;
  style: string;
}
const AddToCart = ({ id, style = "" }: addCartProps) => {
  const { cartContent, setCartContent } = useContext(CartContext);
  const [qty, setQty] = useState(1);
  const [buttonText, setButtonText] = useState("Add to Cart");
  function updateQty(e: React.ChangeEvent<HTMLInputElement>) {
    setQty(Number(e.target.value));
  }
  return (
    <div className={cx("flex flex-col w-full md:w-3/4 ") + style}>
      <button
        className="p-2 my-2 rounded-xl w-[65%] bg-[#F4F3EE] hover:bg-[#E3E1D6] shadow-lg"
        onClick={() => {
          addToCart(id, qty, cartContent, setCartContent);
          setButtonText("Success!");
          setTimeout(() => {
            setButtonText("Add to Cart");
          }, 750);
        }}
      >
        {buttonText}
      </button>
      <div>
        Qty:
        <input
          type="number"
          defaultValue={1}
          onChange={updateQty}
          min={1}
          className="w-[40px] text-center"
        />
      </div>
    </div>
  );
};

export default AddToCart;
