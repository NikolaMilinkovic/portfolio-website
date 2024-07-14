import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/landing-page/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/battleship" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
