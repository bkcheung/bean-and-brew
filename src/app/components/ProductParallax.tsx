'use client'
import { coffeeType } from "../utils/getBeans";
import Product from "./Product";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


interface productProps{
    beans:coffeeType[]
}
const ProductParallax = ({beans}:productProps) => {
    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} 
            className="grid grid-cols-2 gap-[10em] pb-16">
            <MouseParallaxChild factorX={0.3} factorY={0.5}>
                <Product key={beans[0].id} coffee={beans[0]} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.5} factorY={0.3}>
                <Product key={beans[1].id} coffee={beans[1]} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.4} factorY={0.2}>
                <Product key={beans[2].id} coffee={beans[2]} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.2} factorY={0.4}>
                <Product key={beans[3].id} coffee={beans[3]} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.3} factorY={0.5}>
                <Product key={beans[4].id} coffee={beans[4]} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.5} factorY={0.3}>
                <Product key={beans[5].id} coffee={beans[5]} />
            </MouseParallaxChild>
        </MouseParallaxContainer>
    )
}

export default ProductParallax;
