import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/project-page/ProjectPage';

// Pages
import LandingPage from './pages/landing-page/LandingPage';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
