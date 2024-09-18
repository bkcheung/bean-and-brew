import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Checkout from "./page";

describe("Checkout", () => {
  it("Checkout snapshot test", () => {
    const home = render(<Checkout />);
    expect(home).toMatchSnapshot;
  });
});
