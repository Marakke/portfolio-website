import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollToTopButton from './index';

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the ScrollToTopButton component', () => {
    const { container } = render(<ScrollToTopButton />);
    expect(container).toMatchSnapshot();
  });

  it('displays the button when the user scrolls more than 300 pixels', () => {
    const { container } = render(<ScrollToTopButton />);
    const button = container.querySelector('button');

    expect(button).toHaveClass('scroll-to-top-button');

    // Simulate scrolling more than 300 pixels
    Object.defineProperty(window, 'scrollY', { value: 350, writable: true });
    fireEvent.scroll(window);

    expect(button).toHaveClass('visible');
  });

  it('does not display the button when the user scrolls less than or equal to 300 pixels', () => {
    const { container } = render(<ScrollToTopButton />);
    const button = container.querySelector('button');

    expect(button).toHaveClass('scroll-to-top-button');

    // Simulate scrolling less than 300 pixels
    Object.defineProperty(window, 'scrollY', { value: 250, writable: true });
    fireEvent.scroll(window);

    expect(button).not.toHaveClass('visible');
  });

  it('scrolls to the top when clicked', () => {
    const { container } = render(<ScrollToTopButton />);
    const button = container.querySelector('button') as HTMLButtonElement;

    // Simulate scrolling more than 300 pixels
    Object.defineProperty(window, 'scrollY', { value: 350, writable: true });
    fireEvent.scroll(window);

    expect(button).toHaveClass('visible');

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});