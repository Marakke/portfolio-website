import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
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
        clientDescription: "Client",
        name: "Project Name",
        backgroundColor: {
          hex: "#ffffff"
        },
        textColor: {
          hex: "#000000"
        },
        tags: [
          {
            name: "Tag Header"
          },
          {
            name: "Tag Footer"
          }
        ]
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
    const projectsContainer = getByTestId("projects-container");
    expect(projectsContainer).toBeInTheDocument();

    const titleElement = getByRole("heading", { name: "Test Title" });
    expect(titleElement).toBeInTheDocument();

    const descriptionElements = container.querySelectorAll("p.description");
    expect(descriptionElements[0].textContent).toBe("Test Description Top");
    expect(descriptionElements[1].textContent).toBe("Test Description Bottom");

    const clientElement = container.querySelector("p.client");
    const nameElement = container.querySelector("p.name");
    const tagElements = container.querySelectorAll("span.tag");

    expect(clientElement?.textContent).toBe("Client");
    expect(nameElement?.textContent).toBe("Project Name");
    expect(tagElements[0].textContent).toBe("Tag Header");
    expect(tagElements[1].textContent).toBe("Tag Footer");
  });

  it("toggles project card expansion when header is clicked", () => {
    const { container } = render(<Projects />);

    const projectCard = container.querySelector(".project-card");
    expect(projectCard).toBeInTheDocument();
    expect(projectCard).toHaveClass("expanded");

    const cardHeader = container.querySelector(".project-card .card-header");
    expect(cardHeader).toBeInTheDocument();

    if (cardHeader) {
      fireEvent.click(cardHeader);
    }

    expect(projectCard).toHaveClass("collapsed");
  });

  it("clicks GitHub button and opens new tab", () => {
    const { getAllByRole } = render(<Projects />);

    const githubButtons = getAllByRole("button", { name: /Button Text/i });
    expect(githubButtons.length).toBeGreaterThan(0);

    fireEvent.click(githubButtons[0]);

    expect(window.open).toHaveBeenCalledWith("Button Link", "_blank");
  });
});
