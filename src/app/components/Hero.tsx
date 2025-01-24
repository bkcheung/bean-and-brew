"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProductParallax from "./ProductParallax";
import { coffeeType } from "../utils/getBeans";

export default function Hero({ beans }: { beans: coffeeType[] }) {
  const [showText, setShowText] = useState(true);
  const [expandWidth, setExpandWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerHeight);
      if (window.innerHeight < 450) {
        setShowText(false);
      } else setShowText(true);
      if (window.innerHeight < 510) {
        setExpandWidth(true);
      } else setExpandWidth(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerHeight]);

  return (
    <main
      className={`bg-[url('/images/cup.jpg')] bg-[center_top_-5em] bg-no-repeat md:bg-cover md:bg-center md:bg-fixed
                 min-h-[100vh] w-[100vw] flex flex-col items-center ${expandWidth ? "bg-[length:100vw_auto]" : "bg-[length:auto_100vh]"}`}
    >
      {showText && (
        <h4 className="absolute md:fixed w-full text-[2em] md:text-[2.5em] text-center pt-[1.5em] ">
          did someone say
        </h4>
      )}
      <Link
        className="absolute md:fixed z-30 bg-[#F4F3EE] hover:bg-[#E3E1D6] text-center p-2 h-14 rounded-lg text-xl 
                   content-center w-[35vw] md:w-[15vw] lg:w-[12vw] shadow-lg top-[85%] left-1/2 -translate-x-1/2"
        href="/shop"
      >
        Shop All
      </Link>
      <div className="h-[88vh] md:h-[5vh] w-[100vw]" />
      <ProductParallax beans={beans} />
    </main>
  );
}
