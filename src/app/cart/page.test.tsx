import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cart from "./page";
import { CartContext } from "../context";

describe('Cart page',()=>{
    it('renders product in cart', ()=>{
        render(
            <CartContext.Provider value={{cartContent:['Test product 1'], setCartContent:()=>{}}}>
                <Cart/>
            </CartContext.Provider>
        );
        const product = screen.getByText('Test product 1');
        expect(product).toBeInTheDocument;
    })
})