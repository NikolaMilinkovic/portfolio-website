import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CV from '/files/CV.pdf';
import { useNavigate, useLocation } from 'react-router-dom';
import NavButton from './nav-button/NavButton';
import useWindowDimensions from '../../util/windowDimentions';
import './Navbar.scss';

function Navbar() {
  // Handles active button display
  const [activeButton, setActiveButton] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(true);
  const { width } = useWindowDimensions();
  const navRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const showNavbar = () => {
    if (width < 1024) {
      navRef.current.classList.toggle('responsive_nav');
      setShowDropdown(false);
    }
    if (width > 1024) {
      setShowDropdown(true);
    }
  };
  function updateNav(event) {
    navigate('/');
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
          duration={600}
          offset={-80}
          name="Home"
          text="Home"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        />
        {/* ABOUT */}
        <NavButton
          to="scroll-about"
          duration={600}
          offset={100}
          name="About"
          text="About"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        />
        {/* AI */}
        <NavButton
          to="scroll-ai"
          duration={600}
          offset={0}
          name="Ask Ai"
          text="Ask Ai"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        />
        {/* PROJECTS */}
        {showDropdown ? (
          <div className="projects">
            <NavButton
              to="projects"
              className="scroll-link"
              duration={600}
              offset={0}
              isDropdownBtn={['mc-schematic-manager', 'battleship', 'cli-data-structures', 'portfolio-website', 'other-projects']}
              name="Projects"
              text="Projects"
              updateNav={(e) => updateNav(e)}
              activeBtn={activeButton}
            />
            <div className="projects-dropdown">
              <NavButton
                to="scroll-projects-1"
                duration={600}
                offset={0}
                name="mc-schematic-manager"
                text="Mc Schematic Manager"
                updateNav={(e) => updateNav(e)}
                activeBtn={activeButton}
              />
              <NavButton
                to="scroll-projects-2"
                duration={600}
                offset={0}
                name="battleship"
                text="Battleship"
                updateNav={(e) => updateNav(e)}
                activeBtn={activeButton}
              />
              <NavButton
                to="scroll-projects-3"
                duration={600}
                offset={0}
                name="cli-data-structures"
                text="CLI Data Structures"
                updateNav={(e) => updateNav(e)}
                activeBtn={activeButton}
              />
              <NavButton
                to="scroll-projects-4"
                duration={600}
                offset={0}
                name="portfolio-website"
                text="Portfolio Website"
                updateNav={(e) => updateNav(e)}
                activeBtn={activeButton}
              />
              <NavButton
                to="scroll-projects-5"
                duration={600}
                offset={0}
                name="other-projects"
                text="Other Projects"
                updateNav={(e) => updateNav(e)}
                activeBtn={activeButton}
              />
            </div>
          </div>
        ) : (
          <NavButton
            to="scroll-projects-1"
            className="scroll-link"
            duration={600}
            offset={0}
            name="Projects"
            text="Projects"
            updateNav={(e) => updateNav(e)}
            activeBtn={activeButton}
          />
        )}

        {/* SKILLS */}
        {/* <NavButton
          to="scroll-skills"
          duration={600}
          offset={-80}
          name="Skills"
          text="Skills"
          updateNav={(e) => updateNav(e)}
          activeBtn={activeButton}
        /> */}
        {/* CONTACT */}
        <NavButton
          to="scroll-contact"
          duration={600}
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
