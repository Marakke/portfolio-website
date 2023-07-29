import React from "react";
import { render, fireEvent } from "@testing-library/react";
import * as Gatsby from "gatsby";
import Banner from "./index";

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  banner: {
    text: "Banner Text",
    audio: {
      url: "mock/audio/path.mp3",
    },
    buttons: [ 
      {
        logo: {
          fluid() {
            return {
              aspectRatio: 1,
              src: "mock/image/path.jpg",
              srcSet: "mock/srcSet",
              sizes: "(max-width: 800px) 100vw, 800px",
            };
          },
          alt: "Test Alt Text"
        },
        name: "Button Name",
        link: "Button Link"
      }
    ] 
  },
};

describe("Banner", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
    window.open = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the Banner component correctly", () => {
    const { container, getByTestId, getByAltText, getByRole } = render(<Banner />);
    expect(container).toMatchSnapshot();

    const bannerContainer = getByTestId("banner-container");
    expect(bannerContainer).toBeInTheDocument();

    const textElement = getByRole("heading", { name: "Banner Text" });
    expect(textElement).toBeInTheDocument();

    const imageElement = getByAltText("Test Alt Text");
    expect(imageElement).toBeInTheDocument();

    const description = container.querySelectorAll("p");
    expect(description[0].textContent).toBe("Button Name");

    const audioElement = container.querySelector("audio");
    expect(audioElement).toBeInTheDocument();
    expect(audioElement).toHaveAttribute("src", "mock/audio/path.mp3");
    expect(audioElement).toHaveAttribute("controls");
    expect(audioElement).toHaveAttribute("controlsList", "nodownload noplaybackrate");
  });

  it("clicks banner button and opens new tab", () => {
    const { container } = render(<Banner />);

    const buttonElement = container.querySelectorAll("button");
    expect(buttonElement[0]).toBeInTheDocument();

    fireEvent.click(buttonElement[0]);

    expect(window.open).toHaveBeenCalledWith("Button Link", "_blank");
  });
});
