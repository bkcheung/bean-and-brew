"use client";
import { useContext } from "react";
import { CartContext } from "../context";
import Image from "next/image";
import Link from "next/link";
import { coffeeType } from "../utils/getBeans";
import { removeFromCart, addToCart } from "../utils/cartFunctions";

interface cartProps {
  coffee: coffeeType;
  qty: number;
}
const CartProduct = ({ coffee, qty }: cartProps) => {
  const { cartContent, setCartContent } = useContext(CartContext);
  return (
    <div className="flex items-center justify-around rounded-xl bg-light-grey/50 m-4">
      <div className="relative w-[30vw] h-[25vh]">
        <Image
          fill
          src={coffee.image_url}
          alt={coffee.name}
          sizes="30vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col m-4">
        <Link
          href={`shop/${coffee.id}`}
          className="text-xl hover:text-dark-green hover:underline"
        >
          {coffee.name}
        </Link>
        <div className="flex text-lg my-4">
          <button
            onClick={() =>
              removeFromCart(coffee.id, cartContent, setCartContent)
            }
          >
            -
          </button>
          <div className="mx-4"> {qty} </div>
          <button
            onClick={() => addToCart(coffee.id, cartContent, setCartContent)}
          >
            +
          </button>
          <div className="ml-auto">{coffee.price * qty}</div>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
