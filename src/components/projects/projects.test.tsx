import React from "react";
import { render, fireEvent } from "@testing-library/react";
import * as Gatsby from "gatsby";
import Projects from "./index";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  projects: {
    title: "Test Title",
    descriptionTop: "Test Description Top",
    descriptionBottom: "Test Description Bottom",
    buttonText: "Button Text",
    buttonLink: "Button Link",
    projects: [
      {
        client: "Client",
        name: "Project Name",
        link: "Project Link",
        tagHeader: [
          {
            name: "Tag Header"
          }
        ],
        tagFooter: [
          {
            name: "Tag Footer"
          }
        ],
      }
    ]
  }
};

describe("Projects", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
    window.open = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the Projects component correctly", () => {
    const { container, getByTestId, getByRole } = render(<Projects />);
    expect(container).toMatchSnapshot();

    const projectsContainer = getByTestId("projects-container");
    expect(projectsContainer).toBeInTheDocument();

    const titleElement = getByRole("heading", { name: "Test Title" });
    expect(titleElement).toBeInTheDocument();

    const paragraphElements = container.querySelectorAll("p");
    expect(paragraphElements.length).toEqual(11);

    expect(paragraphElements[0].textContent).toBe("Test Description Top");
    expect(paragraphElements[1].textContent).toBe("Test Description Bottom");

    expect(paragraphElements[2].textContent).toBe("Client");
    expect(paragraphElements[3].textContent).toBe("Project Name");
    expect(paragraphElements[4].textContent).toBe("Tag Header");
    expect(paragraphElements[5].textContent).toBe("Tag Footer");
  });

  it("clicks project button and opens new tab", () => {
    const { container } = render(<Projects />);

    const buttonElement = container.querySelectorAll("button");
    expect(buttonElement[1]).toBeInTheDocument();

    fireEvent.click(buttonElement[1]);

    expect(window.open).toHaveBeenCalledWith("Project Link", "_blank");
  });

  it("clicks GitHub button and opens new tab", () => {
    const { container } = render(<Projects />);

    const buttonElement = container.querySelectorAll("button");
    expect(buttonElement[0]).toBeInTheDocument();

    fireEvent.click(buttonElement[0]);

    expect(window.open).toHaveBeenCalledWith("Button Link", "_blank");
  });
});
