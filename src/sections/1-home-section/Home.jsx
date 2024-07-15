import React from 'react';
import { Element } from 'react-scroll';
import './Home.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SocialsSidebar from '../../components/socials/SocialsSidebar';

function Home() {
  return (
    <Element id="scroll-home" name="scroll-home">
      <section className="home-section">
        <SocialsSidebar />

        <div className="para-container">
          <p id="landing-hero-text" className="para">Hi. I am Nick.</p>
          <p id="landing-sub-text" className="para">
            A&nbsp;
            <span className="header-span">FullStack Web Developer</span>
          </p>
          <img id="img-5" className="para" alt="parallax-vector" src="/images/5.png" />
          <img id="img-4" className="para" alt="parallax-vector" src="/images/4.png" />
          <img id="img-3" className="para" alt="parallax-vector" src="/images/3.png" />
          <img id="img-2" className="para" alt="parallax-vector" src="/images/2.png" />
          <img id="img-1" className="para" alt="parallax-vector" src="/images/1.png" />
        </div>

        {/* <img className="test-image" alt="parallax-vector" src="/images/image-4.png" /> */}
      </section>
    </Element>

  );
}

export default Home;
