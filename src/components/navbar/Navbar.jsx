import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CV from '/public/files/CV.pdf';
import NavButton from './nav-button/NavButton';
import useWindowDimensions from '../../util/windowDimentions';
import './Navbar.scss';

function Navbar() {
  // Handles active button display
  const [activeButton, setActiveButton] = useState('Home');
  const { width } = useWindowDimensions();
  const navRef = useRef();

  const showNavbar = () => {
    if (width < 1024) navRef.current.classList.toggle('responsive_nav');
  };
  function updateNav(event) {
    const { name } = event.target;
    setActiveButton(name);
    showNavbar();
  }

  return (
    <nav className="navbar">
      <div className="navbar-options" ref={navRef}>
        {/* CLOSE MENU BUTTON */}
        <button type="button" className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        {/* HOME */}
        <NavButton
          to="scroll-home"
          duration={300}
          offset={-80}
          name="Home"
          text="Home"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        />
        {/* ABOUT */}
        <NavButton
          to="scroll-about"
          duration={300}
          offset={100}
          name="About"
          text="About"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        />
        {/* PROJECTS */}
        <NavButton
          to="scroll-projects"
          duration={300}
          offset={-80}
          name="Projects"
          text="Projects"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        />
        {/* SKILLS */}
        <NavButton
          to="scroll-skills"
          duration={300}
          offset={-80}
          name="Skills"
          text="Skills"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        />
        {/* CONTACT */}
        <NavButton
          to="scroll-contact"
          duration={300}
          offset={-80}
          name="Contact"
          text="Contact"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        />
        {/* CV DOWNLOAD */}
        <a href={CV} download="CV" taget="_blank" className="cv-download-link">
          <button type="button" className="cv-download-btn">
            Download CV
          </button>
        </a>
      </div>
      {/* SHOW MENU BUTTON */}
      <button type="button" className="nav-btn nav-open-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </nav>
  );
}

export default Navbar;
