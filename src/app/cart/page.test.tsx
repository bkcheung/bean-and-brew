"use client";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cart from "./page";
import { CartContext } from "../context";

const data = [{
  _id: "6424335b59f9f6fdd657d2e1",
  id: 1,
  name: "Signature Blend",
  description:
    "A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.",
  price: 12.99,
  region: "Central America",
  weight: 500,
  flavor_profile: ["Dark Chocolate", "Black Cherry"],
  grind_option: ["Whole Bean", "Cafetiere", "Filter", "Espresso"],
  roast_level: 3,
  image_url: "https://iili.io/H8Y78Qt.webp",
  },{
  _id: "6424338559f9f6fdd657d2e2",
  id: 2,
  name: "Golden Sunrise",
  description: "A smooth and bright coffee with a citrusy kick. Sourced from the rolling hills of Africa.",
  price: 10.99,
  region: "Africa",
  weight: 500,
  flavor_profile: ["Citrus"],
  grind_option: ["Whole Bean", "Cafetiere", "Filter", "Espresso"],
  roast_level: 2,
  image_url: "https://iili.io/H8Y7WEg.webp"
}];
//mock use(), as it's currently only available in canary
const react = jest.requireActual('react');
react.use = jest.fn(()=> data); 
const beans = Promise.resolve(data);

describe("Cart page", () => {
  it("Renders empty cart", () => {
    render(
      <CartContext.Provider
        value={{
          cartContent: [],
          setCartContent: () => {},
          beans: beans
        }}
      >
        <Cart />
      </CartContext.Provider>,
    );
    const cart = screen.getByText("Cart is empty");
    expect(cart).toBeInTheDocument;
  }),
  it("renders product in cart", () => {
    render(
      <CartContext.Provider
        value={{
          cartContent: ["1"],
          setCartContent: () => {},
          beans: beans
        }}
      >
        <Cart />
      </CartContext.Provider>,
    );
    const product = screen.getByText("Signature Blend");
    expect(product).toBeInTheDocument;
  })
});
