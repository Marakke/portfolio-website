import React from "react";
import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";
import Footer from "./index";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  footer: {
    accessibilityReportTitle: "Accessibility Report Title",
    accessibilityReport: {
      url: "accessibility-report-url",
    },
    sourceCodeTitle: "Source Code Title",
    sourceCodeLink: "source-code-link",
  }
};

describe("Footer", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the Footer component correctly", () => {
    const { container, getByTestId } = render(<Footer />);
    expect(container).toMatchSnapshot();

    const footerContainer = getByTestId("footer-container");
    expect(footerContainer).toBeInTheDocument();

    const anchorElements = container.querySelectorAll("a");
    expect(anchorElements.length).toEqual(2);

    expect(anchorElements[0]).toHaveTextContent("Accessibility Report Title");
    expect(anchorElements[1]).toHaveTextContent("Source Code Title");

    expect(anchorElements[0].href).toBe("http://localhost/accessibility-report-url");
    expect(anchorElements[1].href).toBe("http://localhost/source-code-link");
  });
});
