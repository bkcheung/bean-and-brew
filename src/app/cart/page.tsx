"use client";
import { use, useContext } from "react";
import { CartContext } from "../context";
import { coffeeType } from "../utils/getBeans";
import EmptyCart from "../components/EmptyCart";
import CartProduct from "../components/CartProduct";
import { numItems } from "../utils/cartFunctions";

export default function Cart() {
  function checkout() {
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
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-[85vw] md:w-[50vw] items-center">
          {userCart}
        </div>
        {!empty && (
          <div className="flex w-[85vw] md:w-[50vw] justify-center">
            <div
              className="flex justify-center items-center w-full md:w-[80%] 
                        md:bg-light-grey/50 md:h-[200px] my-4 rounded-xl md:shadow-md"
            >
              <button
                onClick={checkout}
                className="p-4 my-2 rounded-xl w-full md:w-[80%] max-h-[100px] 
                       bg-light-green/50 hover:bg-light-green shadow-lg"
              >
                Checkout - ${subTotal.toFixed(2)}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
