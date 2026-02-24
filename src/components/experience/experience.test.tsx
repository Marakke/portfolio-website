import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
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
    },
    certificateList: {
      title: "Certificates",
      certifications: [
        {
          name: "Certification Name",
          issueDate: "2024",
          link: "https://example.com"
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
    const experienceContainer = getByTestId("experience-container");
    expect(experienceContainer).toBeInTheDocument();

    const educationTitle = getByRole("heading", { name: "Education Title" });
    expect(educationTitle).toBeInTheDocument();

    const workExperienceTitle = getByRole("heading", { name: "Work Experience Title" });
    expect(workExperienceTitle).toBeInTheDocument();

    const h3Elements = container.querySelectorAll("h3");
    expect(h3Elements.length).toBeGreaterThanOrEqual(2);
    expect(h3Elements[0].textContent).toBe("Test University");
    expect(h3Elements[1].textContent).toBe("Work Place");

    const programmeName = container.querySelector(".programme .name");
    const programmeYears = container.querySelector(".programme .years");
    const workPlaceYears = container.querySelector(".work-place .years");

    expect(programmeName?.textContent).toBe("Programme");
    expect(programmeYears?.textContent).toBe("2020 -> 2023");
    expect(workPlaceYears?.textContent).toBe("2020 -> 2023");
  });
});
