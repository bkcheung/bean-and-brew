import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import AddToCart from "./AddToCart";

describe('Add to Cart', () => {
    it('button renders', ()=>{
        render(<AddToCart id={1}/>);
        const button = screen.getAllByRole('button',{name:"Add to Cart"});
        expect(button).toBeInTheDocument;
    }),
    it('item can be added to cart', async ()=>{
        render(<AddToCart id={1}/>);
        const button = screen.getByRole('button',{name:"Add to Cart"});
        await userEvent.click(button);
    })
})