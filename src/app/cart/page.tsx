"use client";
import { use, useContext } from "react";
import { CartContext } from "../context";
import { coffeeType } from "../utils/getBeans";
import EmptyCart from "../components/EmptyCart";
import CartProduct from "../components/CartProduct";
import { numItems } from "../utils/cartFunctions";

export default function Cart() {
  let userCart;
  let subTotal = 0;
  let coffeeBeans: coffeeType[];
  const { cartContent, beans } = useContext(CartContext);
  let empty = numItems(cartContent) === 0;
  if (beans !== null) coffeeBeans = use(beans);
  if (empty) {
    userCart = <EmptyCart />;
  } else if (beans === null) {
    userCart = <div>Error: beans cannot be found, please try again later</div>;
  } else {
    userCart = cartContent.map((qty, index) => {
      if (qty === 0) return;
      const product = coffeeBeans.filter(
        (bean: coffeeType) => bean.id === index,
      )[0];
      subTotal += product.price * qty;
      return <CartProduct key={index} coffee={product} qty={qty} />;
    });
  }
  return (
    <div className="text-black flex flex-col items-center">
      <h4 className="text-3xl py-8">Cart</h4>
      <div className="flex flex-col w-[90%] lg:w-[70%]">{userCart}</div>
      {!empty && <div className="text-right">Subtotal: ${subTotal}</div>}
    </div>
  );
}
