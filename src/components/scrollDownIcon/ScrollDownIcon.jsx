/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './ScrollDownIcon.scss';

function ScrollDownIcon() {
  const scrollToSection = (id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Element with ID ${id} not found.`);
    }
  };
  return (
    <div className="scrollDown" onClick={() => scrollToSection('scroll-about', 100)}>
      <span />
    </div>
  );
}

export default ScrollDownIcon;
