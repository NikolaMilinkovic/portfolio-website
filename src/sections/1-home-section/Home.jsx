import React from 'react';
import { Element } from 'react-scroll';
import './Home.scss';
import SocialsSidebar from '../../components/socials/SocialsSidebar';

function Home() {
  return (
    <Element id="scroll-home" name="scroll-home">
      <section className="home-section">
        <SocialsSidebar />
        <p>This is my home section</p>
      </section>
    </Element>

  );
}

export default Home;
