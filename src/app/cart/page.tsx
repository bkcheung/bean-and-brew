'use client'
import { useContext } from "react";
import { CartContext } from "../context";

export default function Cart() {
  const {cartContent} = useContext(CartContext);
  const userCart = cartContent.map((product: string, index:number)=>{
    return(
      <div key={index}>{product}</div>
    )
  })
  console.log(cartContent);
  return (
      <div className="text-black flex flex-col items-center">
        <h4 className="text-3xl py-8">Cart</h4>
        <div className="flex flex-col">
          {userCart}
        </div>
      </div>  
  );
}
