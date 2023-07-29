import React from "react";
import { render } from "@testing-library/react";
import { CardCarousel } from "./cardcarousel";
import '../../../__mocks__/intersectionObserverMock';

describe("CardCarousel", () => {
  it("renders the CardCarousel component correctly", () => {
    const { getByText } = render(
      <CardCarousel>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </CardCarousel>
    );

    expect(getByText("Card 1")).toBeInTheDocument();
    expect(getByText("Card 2")).toBeInTheDocument();
    expect(getByText("Card 3")).toBeInTheDocument();
  });
});
