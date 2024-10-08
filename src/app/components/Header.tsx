"use client";
import Menu from "./Menu";
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
      <div className="flex items-center justify-around pt-12 pb-6 min-h-28 bg-[url('/images/leaf.jpg')] bg-cover">
        <Menu />
        <Link href="/" className="text-3xl text-white">
          Bean & Brew
        </Link>
        <Link href="/cart" className="relative">
          <Image
            className=""
            src="/images/bag.png"
            alt="bag logo"
            width={30}
            height={30}
          />
          {cartCount > 0 && (
            <div
              className="bg-green-950/50 rounded-full text-xs w-5 h-5 text-center 
                         text-white absolute top-[-20%] right-[-30%]"
            >
              {cartCount}
            </div>
          )}
        </Link>
      </div>
      <h2 className="p-1 min-h-4 bg-light-grey text-center">
        Freshly roasted small-batch coffee beans
      </h2>
    </div>
  );
};

export default Header;
