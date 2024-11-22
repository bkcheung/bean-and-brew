"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context";
import { numItems } from "../utils/cartFunctions";

const Header = () => {
  const { cartContent } = useContext(CartContext);
  const cartCount = numItems(cartContent);
  return (
    <div className="sticky top-0 z-40" aria-label="header">
      <div
        className="flex items-center justify-around h-[12vh] w-[100vw] pt-8 md:pt-0 
                      bg-[url('/images/silk.jpg')] bg-cover shadow-lg bg-center"
      >
        <Link href="/" className="text-3xl md:text-5xl mr-auto pl-8 md:pl-16">
          Bean & Brew
        </Link>
        <Link
          href="/shop"
          aria-label="shop"
          className="text-2xl md:text-3xl ml-2 md:ml-8"
        >
          Shop
        </Link>
        <Link
          href="/cart"
          aria-label="cart"
          className="relative flex items-center mx-6 md:mx-8"
        >
          <Image
            className="w-8 invert"
            src="/images/bag.png"
            alt="bag logo"
            width={50}
            height={50}
          />
          {cartCount > 0 && (
            <div
              className="bg-gray-700/75 rounded-full w-6 h-6 text-center 
                         text-white absolute top-[-15%] right-[-40%]"
            >
              {cartCount}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
