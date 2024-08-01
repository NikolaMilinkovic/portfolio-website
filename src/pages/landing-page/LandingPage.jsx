import React, { useEffect, useState } from 'react';

// import useImageLoader from '../../util/useImageLoader';
import useImageLoader from '../../util/useImageLoader';
import Navbar from '../../components/navbar/Navbar';
import Home from '../../sections/1-home-section/Home';
import About from '../../sections/2-about-section/About';
import AiSection from '../../sections/4-AI-section/AiSection';
import Projects from '../../sections/3-projects-section/Projects';
import Contact from '../../sections/5-contact-section/Contact';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';
import './LandingPage.scss';

function LandingPage() {
  const loading = useImageLoader();
  const [csActive, setCSActive] = useState(false);
  function toggleCS() {
    if (csActive) {
      setCSActive(!csActive);
    }
  }

  return (
    <div className="main-content">
      <Loading
        isLoading={loading}
      />
      <Home />
      <About />
      <AiSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
