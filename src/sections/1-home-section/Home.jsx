import React from 'react';
import { Element } from 'react-scroll';
import './Home.scss';
import SocialsSidebar from '../../components/socials/SocialsSidebar';

function Home() {
  return (
    <Element id="scroll-home" name="scroll-home">
      <section className="home-section">
        <SocialsSidebar />
        <img className="test-image" alt="parallax-vector" src="/images/image-4.png" />
      </section>
    </Element>

  );
}

export default Home;
