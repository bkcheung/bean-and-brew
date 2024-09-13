import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Product from "./Product";

const coffee = {
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
};
describe("Product", () => {
  it("renders", () => {
    const product = render(<Product coffee={coffee} />);
    expect(product).toMatchSnapshot;
  });
});
