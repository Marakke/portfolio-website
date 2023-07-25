import React, { useState, useEffect } from 'react';
import arrowUpSvg from "../../images/arrowUp.svg"

import './scrollToTopButton.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const yOffset = window.scrollY;
    setIsVisible(yOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <img src={arrowUpSvg} alt="Scroll to top" />
    </button>
  );
};

export default ScrollToTopButton;
