import React from "react";
import { render } from "@testing-library/react";
import Hero from "./index";

describe("Hero", () => {
  it("renders the Hero component", () => {
    render(<Hero />);
  });
});
