import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Shop from "./page";

window.fetch = jest.fn(() => {
  const data = [
    {
      id: 1,
      name: "Signature Blend",
      price: "12.99",
      image_url: "https://iili.io/H8Y78Qt.webp",
    },
    {
      id: 2,
      name: "Golden Sunrise",
      price: "13.99",
      image_url: "https://iili.io/H8Y7WEg.webp",
    },
  ];
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(data),
  });
}) as jest.Mock;

describe("Shop", () => {
  it("renders shop page", async () => {
    const shop = render(<Shop />);
    expect(shop).toMatchSnapshot;
  });
  // it('title highlights on hover', async ()=>{
  //     render(<Shop/>);
  //     const product1 = screen.getByText('Signature Blend');
  //     const product2 = screen.getByText('Golden Sunrise');
  //     expect(product1).toBeInTheDocument;
  //     expect(product2).toBeInTheDocument;
  // })
});
