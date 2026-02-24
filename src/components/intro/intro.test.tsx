import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as Gatsby from "gatsby";
import Intro from "./index";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  intro: {
    title: "Test Title",
    subtitle: "Test Subtitle",
    subtitleSecondary: "Test Secondary Subtitle",
    descriptionTitle: "Test Description Title",
    descriptionBody: "Test Description Body",
    descriptionSubbody: "Test Description Subbody",
    descriptionFooter: "Test Description Footer",
    image: {
      fluid: {
        aspectRatio: 1,
        src: "mock/image/path.jpg",
        srcSet: "mock/srcSet",
        sizes: "(max-width: 800px) 100vw, 800px",
      },
      alt: "Test Alt Text"
    }
  }
};

describe("Intro", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the Intro component correctly", () => {
    const { container, getByTestId, getByAltText, getByRole } = render(<Intro />);
    const introContainer = getByTestId("intro-container");
    expect(introContainer).toBeInTheDocument();

    const titleElement = getByRole("heading", { name: "Test Title" });
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = container.querySelector("h3.intro-subtitle");
    expect(subtitleElement?.textContent).toBe("Test Subtitle");

    const imageElement = getByAltText("Test Alt Text");
    expect(imageElement).toBeInTheDocument();

    const paragraphElements = container.querySelectorAll("p");
    expect(paragraphElements.length).toEqual(9);
    expect(paragraphElements[0].textContent).toBe("Test Description Title");
  });
});
