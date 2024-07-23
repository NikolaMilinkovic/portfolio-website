import React, { useEffect } from 'react';

// import useImageLoader from '../../util/useImageLoader';
import useImageLoader from '../../util/useImageLoader';
import Navbar from '../../components/navbar/Navbar';
import Home from '../../sections/1-home-section/Home';
import About from '../../sections/2-about-section/About';
import Projects from '../../sections/3-projects-section/Projects';
import Skills from '../../sections/4-skills-section/Skills';
import Contact from '../../sections/5-contact-section/Contact';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';
import './LandingPage.scss';

function LandingPage() {
  const loading = useImageLoader();

  return (
    <>
      <Loading
        isLoading={loading}
      />
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
