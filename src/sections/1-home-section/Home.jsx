import React from 'react';
import { Element } from 'react-scroll';
import './Home.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SocialsSidebar from '../../components/socials/SocialsSidebar';
import BirdGif from '../../components/birdGif/BirdGif';

function Home() {
  return (
    <Element id="scroll-home" name="scroll-home">
      <section className="home-section">
        <SocialsSidebar />

        <div className="para-container">
          <div className="hero-wrapper para">
            <p id="landing-hero-text" className="para">Hi. I am Nick.</p>
            <p id="landing-sub-text" className="para">
              A&nbsp;
              <span className="header-span">FullStack Web Developer</span>
            </p>
          </div>

          <img id="img-5" className="para" alt="parallax-vector" src="/images/5.png" />
          <img id="img-4" className="para" alt="parallax-vector" src="/images/4.png" />
          <img id="img-3" className="para" alt="parallax-vector" src="/images/3.png" />
          <img id="img-2" className="para" alt="parallax-vector" src="/images/2.png" />
          <img id="img-1" className="para" alt="parallax-vector" src="/images/1.png" />

          {/* Birds */}
          <BirdGif
            id="bird-1"
            initialTop="50vh"
            left="10"
            speed={23}
          />
          <BirdGif
            id="bird-2"
            initialTop="65vh"
            left="-44"
            speed={29}
          />
          <BirdGif
            id="bird-3"
            initialTop="48vh"
            left="-50"
            speed={26}
          />
          <BirdGif
            id="bird-4"
            initialTop="46vh"
            left="-40"
            speed={22}
          />
          <BirdGif
            id="bird-5"
            initialTop="77vh"
            left="-7"
            speed={19}
          />
        </div>

        {/* <img className="test-image" alt="parallax-vector" src="/images/image-4.png" /> */}
      </section>
    </Element>

  );
}

export default Home;
