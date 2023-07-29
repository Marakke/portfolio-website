import React from "react";
import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";
import Contact from "./index";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  contact: {
    titleWhite: "Test Title White",
    titleBlack: "Test Title Black",
    descriptionHeader: "Test Description Header",
    descriptionFooter: "Test Description Footer",
    highlightedWords: "HighlightedWordOne, HighlightedWordTwo",
    email: "email@email.com",
    linkedin: "linkedinaccount",
    github: "githubaccount",
  }
};

describe("Contact", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the Contact component correctly", () => {
    const { container, getByTestId, getByRole } = render(<Contact />);
    expect(container).toMatchSnapshot();

    const contactContainer = getByTestId("contact-container");
    expect(contactContainer).toBeInTheDocument();

    const titleWhite = getByRole("heading", { name: "Test Title White Test Title Black" });
    expect(titleWhite).toBeInTheDocument();

    const anchorElements = container.querySelectorAll("a");
    expect(anchorElements.length).toEqual(3);

    expect(anchorElements[0]).toHaveTextContent("email@email.com");
    expect(anchorElements[1]).toHaveTextContent("linkedinaccount");
    expect(anchorElements[2]).toHaveTextContent("githubaccount");

    expect(anchorElements[0].href).toBe("mailto:email@email.com");
    expect(anchorElements[1].href).toBe("https://linkedinaccount/");
    expect(anchorElements[2].href).toBe("https://githubaccount/");

    const paragraphElements = container.querySelectorAll("p");
    expect(paragraphElements.length).toEqual(7);

    expect(paragraphElements[0].textContent).toBe("Test Description Header");
    expect(paragraphElements[1].textContent).toBe("Test Description Footer ");
  });
});
