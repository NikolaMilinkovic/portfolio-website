import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CV from '/files/CV.pdf';
import { useNavigate, useLocation } from 'react-router-dom';
import NavButton from './nav-button/NavButton';
import useWindowDimensions from '../../util/windowDimentions';
import { useNavbar } from '../../../NavbarContext';
import './Navbar.scss';

const Navbar = React.memo(() => {
  // Handles active button display
  // const [activeButton, setActiveButton] = useState('Home');
  // const [showDropdown, setShowDropdown] = useState(true);
  const {
    activeButton, setActiveButton, showDropdown, setShowDropdown,
  } = useNavbar();
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

  const handleNavClick = (event) => {
    const { name } = event.target;
    setActiveButton(name);
    showNavbar();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: name } });
    } else {
      scrollToSection(`scroll-${name.toLowerCase()}`);
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        if (location.state.scrollTo.toLowerCase() === 'about') {
          scrollToSection(`scroll-${location.state.scrollTo.toLowerCase()}`, 80);
        } else {
          scrollToSection(`scroll-${location.state.scrollTo.toLowerCase()}`);
        }
      }, 1200);
    }
  }, [location]);

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
          updateNav={(e) => handleNavClick(e)}
          activeBtn={activeButton}
        />
        {/* ABOUT */}
        <NavButton
          to="scroll-about"
          duration={600}
          offset={100}
          name="About"
          text="About"
          updateNav={(e) => handleNavClick(e)}
          activeBtn={activeButton}
        />
        {/* AI */}
        <NavButton
          to="scroll-faq"
          duration={600}
          offset={0}
          name="FAQ"
          text="FAQ"
          updateNav={(e) => handleNavClick(e)}
          activeBtn={activeButton}
        />
        {/* PROJECTS */}
        {showDropdown ? (
          <div className="projects">
            <NavButton
              to="mc-schematic-manager"
              className="scroll-link"
              duration={600}
              offset={0}
              isDropdownBtn={['mc-schematic-manager', 'battleship', 'cli-data-structures', 'portfolio-website', 'other-projects']}
              name="mc-schematic-manager"
              text="Projects"
              updateNav={(e) => handleNavClick(e)}
              activeBtn={activeButton}
            />
            <div className="projects-dropdown">
              <NavButton
                to="scroll-mc-schematic-manager"
                duration={600}
                offset={0}
                name="mc-schematic-manager"
                text="Mc Schematic Manager"
                updateNav={(e) => handleNavClick(e)}
                activeBtn={activeButton}
              />
              <NavButton
                to="scroll-battleship"
                duration={600}
                offset={0}
                name="battleship"
                text="Battleship"
                updateNav={(e) => handleNavClick(e)}
                activeBtn={activeButton}
              />
              <NavButton
                to="scroll-cli-data-structures"
                duration={600}
                offset={0}
                name="cli-data-structures"
                text="CLI Data Structures"
                updateNav={(e) => handleNavClick(e)}
                activeBtn={activeButton}
              />
              <NavButton
                to="scroll-portfolio-website"
                duration={600}
                offset={0}
                name="portfolio-website"
                text="Portfolio Website"
                updateNav={(e) => handleNavClick(e)}
                activeBtn={activeButton}
              />
              <NavButton
                to="scroll-other-projects"
                duration={600}
                offset={0}
                name="other-projects"
                text="Other Projects"
                updateNav={(e) => handleNavClick(e)}
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
            updateNav={(e) => handleNavClick(e)}
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
          updateNav={(e) => handleNavClick(e)}
          activeBtn={activeButton}
        /> */}
        {/* CONTACT */}
        <NavButton
          to="scroll-contact"
          duration={600}
          offset={-80}
          name="Contact"
          text="Contact"
          updateNav={(e) => handleNavClick(e)}
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
});

export default Navbar;
