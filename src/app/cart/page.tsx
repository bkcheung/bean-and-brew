"use client";
import { use, useContext } from "react";
import { CartContext } from "../context";
import { coffeeType } from "../utils/getBeans";
import EmptyCart from "../components/EmptyCart";
import CartProduct from "../components/CartProduct";

export default function Cart() {
  let userCart;
  let coffeeBeans: coffeeType[];
  const { cartContent, beans } = useContext(CartContext);
  if (beans !== null) coffeeBeans = use(beans);
  if (cartContent.length == 0) {
    userCart = <EmptyCart />;
  } else if (beans === null) {
    userCart = <div>Error: beans cannot be found, please try again later</div>;
  } else {
    userCart = cartContent.map((qty, index)=>{
      const product = coffeeBeans.filter(
          (bean: coffeeType) => bean.id === index,
        )[0];
      return <CartProduct key={index} coffee={product} qty={qty}/>
    })
  }
  return (
    <div className="text-black flex flex-col items-center">
      <h4 className="text-3xl py-8">Cart</h4>
      <div className="flex flex-col w-[90%] lg:w-[70%]">{userCart}</div>
    </div>
  );
}
