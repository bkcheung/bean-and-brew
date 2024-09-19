import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AddToCart from "./AddToCart";

window.structuredClone = jest.fn((val) => JSON.parse(JSON.stringify(val)));

describe("Add to Cart", () => {
  it("button renders", () => {
    render(<AddToCart id={1} style="" />);
    const button = screen.getAllByRole("button", { name: "Add to Cart" });
    expect(button).toBeInTheDocument;
  });
});
