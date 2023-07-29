import React from "react";
import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";
import Experience from "./index";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  experience: {
    education: {
      title: "Education Title",
      university: "Test University",
      programmes: [
        {
          name: "Programme",
          startYear: "2020",
          endYear: "2023"
        }
      ]
    },
    workExperience: {
      title: "Work Experience Title",
      workPlaces: [
        {
          name: "Work Place",
          startYear: "2020",
          endYear: "2023"
        }
      ]
    }
  }
};

describe("Experience", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the Experience component correctly", () => {
    const { container, getByTestId, getByRole } = render(<Experience />);
    expect(container).toMatchSnapshot();

    const experienceContainer = getByTestId("experience-container");
    expect(experienceContainer).toBeInTheDocument();

    const educationTitle = getByRole("heading", { name: "Education Title" });
    expect(educationTitle).toBeInTheDocument();

    const workExperienceTitle = getByRole("heading", { name: "Work Experience Title" });
    expect(workExperienceTitle).toBeInTheDocument();

    const h3Elements = container.querySelectorAll("h3");
    expect(h3Elements.length).toEqual(2);
    expect(h3Elements[0].textContent).toBe("Test University");

    const paragraphElements = container.querySelectorAll("p");
    expect(paragraphElements.length).toEqual(8);

    expect(paragraphElements[0].textContent).toBe("Programme");
    expect(paragraphElements[1].textContent).toBe("2020 -> 2023");

    expect(h3Elements[1].textContent).toBe("Work Place");
    expect(paragraphElements[2].textContent).toBe("2020 -> 2023");
  });
});
