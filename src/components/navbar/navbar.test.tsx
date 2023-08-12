import React from "react";
import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";
import Navbar from "./index";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  navbar: {
    items: [
      {
        name: "Item1"
      },
      {
        name: "Item2"
      },
    ]
  }
}

describe("Navbar", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the Navbar component correctly", () => {
    const { container, getByTestId } = render(<Navbar />);
    expect(container).toMatchSnapshot();

    const navbarContainer = getByTestId("navbar-container");
    expect(navbarContainer).toBeInTheDocument();

    const anchorElements = container.querySelectorAll("a");
    expect(anchorElements.length).toEqual(2);

    expect(anchorElements[0]).toHaveTextContent("Item1");
    expect(anchorElements[1]).toHaveTextContent("Item2");

    expect(anchorElements[0].href).toBe("http://localhost/#item1");
    expect(anchorElements[1].href).toBe("http://localhost/#item2");
  });
});
