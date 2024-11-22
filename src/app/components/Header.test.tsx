import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("header renders", () => {
    render(<Header />);
    const header = screen.getByLabelText("header");
    expect(header).toBeInTheDocument;
  }),
    it("shop button renders", () => {
      render(<Header />);
      const menuButton = screen.getByRole("link", { name: "shop" });
      expect(menuButton).toBeInTheDocument;
    }),
    it("home link renders", () => {
      render(<Header />);
      const home = screen.getByRole("link", { name: "Bean & Brew" });
      expect(home).toBeInTheDocument;
    });
  it("cart link renders", () => {
    render(<Header />);
    const cart = screen.getByRole("link", { name: "cart" });
    expect(cart).toBeInTheDocument;
  });
});
