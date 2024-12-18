"use client";
import { use, useContext } from "react";
import Link from "next/link";
import EmptyCart from "../components/EmptyCart";
import CartProduct from "../components/CartProduct";
import { CartContext } from "../context";
import { coffeeType } from "../utils/getBeans";
import { numItems } from "../utils/cartFunctions";

export default function Cart() {
  let userCart;
  let subTotal = 0;
  let coffeeBeans: coffeeType[];
  const { cartContent, setCartContent, beans } = useContext(CartContext);
  const empty = numItems(cartContent) === 0;
  if (beans !== null) coffeeBeans = use(beans);
  if (empty) {
    userCart = <EmptyCart />;
  } else if (beans === null) {
    userCart = <div>Error: beans cannot be found, please try again later</div>;
  } else {
    userCart = cartContent.map((qty, index) => {
      if (qty === 0 || qty === null || qty === undefined) return;
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
                        md:bg-[#E3E1D6]/25 md:h-[323.5px] my-4 rounded-xl md:shadow-md"
            >
              <Link
                href="/checkout"
                className="flex justify-center w-[85vw] md:w-[50vw]"
              >
                <button
                  onClick={() => {
                    setCartContent([]);
                    localStorage.setItem("cart", "[]");
                  }}
                  className="p-4 my-2 rounded-xl w-full md:w-[80%] max-h-[100px] 
                bg-[#E3E1D6] hover:bg-[#F4F3EE] shadow-lg text-center"
                >
                  Checkout - ${subTotal.toFixed(2)}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
