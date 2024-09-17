"use client";
import { use, useContext } from "react";
import { CartContext } from "../context";
import { coffeeType } from "../utils/getBeans";

export default function Cart() {
  let userCart;
  let coffeeBeans: coffeeType[];
  const { cartContent, beans } = useContext(CartContext);
  if (beans !== null) coffeeBeans = use(beans);
  if (cartContent.length == 0) {
    userCart = <div>Cart is empty</div>;
  } else if (beans === null) {
    userCart = <div>Error: beans cannot be found, please try again later</div>;
  } else {
    userCart = cartContent.map((id: string, index: number) => {
      const product = coffeeBeans.filter(
        (bean: coffeeType) => bean.id === Number(id),
      )[0];
      return <div key={index}>{product?.name}</div>;
    });
  }
  return (
    <div className="text-black flex flex-col items-center">
      <h4 className="text-3xl py-8">Cart</h4>
      <div className="flex flex-col">{userCart}</div>
    </div>
  );
}
