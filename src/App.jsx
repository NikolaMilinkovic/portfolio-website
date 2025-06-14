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
      '%cThe deeper you look, the more you find...\n🌿 %cHappy exploring! 🌿',
      'color: #B2CC85; font-size: 16px; font-weight: bold;',
      'color: #785; font-size: 14px;',
    );
    console.log(
      '%cDid you know that clicking the birds does something..\nMaybee there is a secret?',
      'color: #555; font-size: 14px;',
    );

    // Unutar komponente BirdGif uradi foru da ti ptica nesto kaze da run u console

    // Easter egg commands
    window.secret = () => {
      console.log(
        '%c✨ You found the secret command!',
        'color: #FF6B6B; font-size: 18px; font-weight: bold;',
      );
      console.log(
        'Try %cwindow.hint()%c for a clue.',
        'color: #7BAE7F;',
        'color: inherit;',
      );
    };

    // window.hint = () => {
    //   console.log(
    //     '%c💡 Hint: The answer is somewhere in the code...',
    //     'color: #4ECDC4; font-size: 14px;',
    //   );
    // };
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

          {/* INFINITY */}
          <Route
            path="/case-study/infinity"
            element={(
              <ProjectPage
                projectUrl="/files/projects/infinity.json"
              />
          )}
          />

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
