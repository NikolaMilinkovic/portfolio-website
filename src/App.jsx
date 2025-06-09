import './App.scss';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ProjectPage from './pages/project-page/ProjectPage';
import Navbar from './components/navbar/Navbar';
import PageTracker from '../PageTracker';

// Pages
import LandingPage from './pages/landing-page/LandingPage';

import { NavbarProvider } from '../NavbarContext';
import ScrollToTop from './util/ScrollToTop';

function App() {
  const [activeButton, setActiveButton] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(true);
  useEffect(() => {
    console.log(
      '%c . . .-. .-. .-. . .   .-. .-. .-. .-. . . .-. . ',
      'color: #0984e3;',
    );
    console.log(
      "%c |-| |-| |-' |-'  |    |   | | |  ) |  |\| |.. |  ",
      'color: #0984e3;',
    );
    console.log(
      "%c ' ` ` ' '   '    `    `-' `-' `-' `-' ' ` `-' . ",
      'color: #0984e3;',
    );
  }, []);

  return (
    <NavbarProvider>
      <BrowserRouter>
        <ScrollToTop />
        <PageTracker />
        <Navbar
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* BATTLESHIP */}
          <Route
            path="/case-study/battleship"
            element={(
              <ProjectPage
                projectUrl="/files/projects/battleship.json"
              />
          )}
          />

          {/* MC-SCHEM-MAN */}
          <Route
            path="/case-study/mc-schematic-manager"
            element={(
              <ProjectPage
                projectUrl="/files/projects/mc-schematic-manager.json"
              />
          )}
          />

          {/* CLI DATA STRUCTURES */}
          <Route
            path="/case-study/cli-data-structures"
            element={(
              <ProjectPage
                projectUrl="/files/projects/cli-data-structures.json"
              />
          )}
          />
          {/* CLI DATA STRUCTURES */}
          <Route
            path="/case-study/portfolio-website"
            element={(
              <ProjectPage
                projectUrl="/files/projects/portfolio-website.json"
              />
          )}
          />
        </Routes>
        <Analytics />

      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
