import './App.scss';
import React from 'react';

// Sections
import Home from './sections/1-home-section/Home';
import About from './sections/2-about-section/About';
import Projects from './sections/3-projects-section/Projects';
import Skills from './sections/4-skills-section/Skills';
import Contact from './sections/5-contact-section/Contact';

// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
