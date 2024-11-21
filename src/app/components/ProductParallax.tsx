'use client'
import { coffeeType } from "../utils/getBeans";
import Product from "./Product";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


interface productProps{
    beans:coffeeType[]
}
const ProductParallax = ({beans}:productProps) => {
    const prods = beans.slice(0,6).map((bean:coffeeType)=>{
        const x = Math.random();
        const y = Math.random();
        return(
            <MouseParallaxChild key={bean.id} factorX={x} factorY={y}>
                <div>
                    <Product key={bean.id} coffee={bean} />
                </div>
            </MouseParallaxChild>
        )
    })
    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} 
            className="grid md:grid-cols-2 md:gap-x-[40em] md:gap-y-[5em] pb-16">
            {prods}
        </MouseParallaxContainer>
    )
}

export default ProductParallax;
