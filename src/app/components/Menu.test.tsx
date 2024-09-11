import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Menu from "./Menu";

describe('Menu', () => {
    it('Menu button renders', ()=>{
        render(<Menu/>);
        const menuButton = screen.getByRole('button', {name:"menu logo"});
        expect(menuButton).toBeInTheDocument;
    }),
    it('Menu renders', ()=>{
        render(<Menu/>);
        const menu = screen.getByLabelText("menu");
        expect(menu).toBeInTheDocument;
    }),
    it('Menu can be toggled', async ()=>{
        render(<Menu/>);
        const menuButton = screen.getByRole('button', {name:"menu logo"});
        const menu = screen.getByLabelText("menu");
        expect(menu).toHaveClass('hidden');
        expect(menu).not.toHaveClass('show');
        await userEvent.click(menuButton);
        expect(menu).not.toHaveClass('hidden');
        expect(menu).toHaveClass('show');
        await userEvent.click(menuButton);
        expect(menu).toHaveClass('hidden');
        expect(menu).not.toHaveClass('show');
    })
})