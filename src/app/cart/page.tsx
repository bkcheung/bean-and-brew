"use client";
import { use, useContext } from "react";
import { CartContext } from "../context";
import { coffeeType } from "../utils/getBeans";
import EmptyCart from "../components/EmptyCart";
import CartProduct from "../components/CartProduct";
import { numItems } from "../utils/cartFunctions";

export default function Cart() {
  function checkout(){
    console.log("Checkout!");
  }
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
      <div className="flex flex-col w-[85vw] lg:w-[70vw]">{userCart}</div>
      {!empty && <div className="flex flex-col items-center">
        <button onClick={checkout} 
                className="bg-light-green/50 p-4 m-4 rounded-xl hover:bg-light-green w-[85vw] lg:w-[70vw]"
                style={{ border: "1px, outset, rgb(200 200 200 / 0.85)" }}
        >Checkout - ${subTotal.toFixed(2)}</button>
      </div>}
    </div>
  );
}
