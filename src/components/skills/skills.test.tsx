import React from "react";
import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";
import Skills from "./index";
import '../../../__mocks__/intersectionObserverMock';

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  skillset: {
    title: "Test Title",
    skills: [
      {
        name: "Test Name",
        image: {
          fluid: () => {
            return {
              aspectRatio: 1,
              src: "mock/image/path.jpg",
              srcSet: "mock/srcSet",
              sizes: "(max-width: 800px) 100vw, 800px",
            };
          },
          alt: "Test Alt Text",
        },
        level: "Level:",
        xp: "XP:"
      }
    ],
    helpText: "Test Help Text",
  },
};

describe("Skills", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the Skills component correctly", () => {
    const { container, getByTestId, getByAltText, getByRole } = render(<Skills />);
    expect(container).toMatchSnapshot();

    const skillsContainer = getByTestId("skills-container");
    expect(skillsContainer).toBeInTheDocument();

    const titleElement = getByRole("heading", { name: "Test Title" });
    expect(titleElement).toBeInTheDocument();

    const imageElement = getByAltText("Test Alt Text");
    expect(imageElement).toBeInTheDocument();

    const paragraphElements = container.querySelectorAll("p");
    expect(paragraphElements.length).toEqual(7);
    expect(paragraphElements[0].textContent).toBe("Level:");
    expect(paragraphElements[1].textContent).toBe("XP:");
  });
});
