import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Shop from "./page";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("Shop", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("renders shop page", async () => {
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

    fetchMock.mockResponseOnce(JSON.stringify(data));

    const shopJSX = await Shop(); //since Shop returns a Promise<JSX.Element> rather than JSX.Element
    render(shopJSX);
    const product1 = screen.getByText("Signature Blend");
    const product2 = screen.getByText("Golden Sunrise");
    expect(product1).toBeInTheDocument;
    expect(product2).toBeInTheDocument;
  });
});
