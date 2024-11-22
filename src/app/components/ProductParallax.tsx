"use client";
import { coffeeType } from "../utils/getBeans";
import Product from "./Product";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { useState, useEffect } from "react";

interface productProps {
  beans: coffeeType[];
}
const ProductParallax = ({ beans }: productProps) => {
  let products;
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width < 768) {
    products = beans.slice(0, 6).map((bean: coffeeType) => {
      return <Product key={bean.id} coffee={bean} bubble={false} />;
    });
  } else {
    //Parallax for wider screens
    products = beans.slice(0, 6).map((bean: coffeeType) => {
      const x = Math.random() * (0.8 - 0.4) + 0.4;
      const y = Math.random() * (0.8 - 0.4) + 0.4;
      return (
        <MouseParallaxChild
          key={bean.id}
          factorX={x}
          factorY={y}
          className="w-auto"
        >
          <Product key={bean.id} coffee={bean} bubble={true} />
        </MouseParallaxChild>
      );
    });
  }
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      className="grid grid-cols-2 w-full bg-gradient-to-t from-[#e6e3e3]/95 from-90% via-[#e6e3e3]/80
                   md:bg-none md:gap-x-[30vw] md:gap-y-[5vw] pt-16 md:pt-0 pb-16"
    >
      {products}
    </MouseParallaxContainer>
  );
};

export default ProductParallax;
