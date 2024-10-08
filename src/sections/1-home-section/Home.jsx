import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import './Home.scss';
import SocialsSidebar from '../../components/socials/SocialsSidebar';
import ScrollDownIcon from '../../components/scrollDownIcon/ScrollDownIcon';
import BirdGif from '../../components/birdGif/BirdGif';

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Element id="scroll-home" name="scroll-home">
      <section className="home-section">
        <div className="para-container">
          <SocialsSidebar />

          <div className="hero-wrapper para">
            <h1 id="landing-sub-text" className="para">
              <span className="subtext-span">
                Hi, I am Nick.
              </span>
              <span className="header-span">A&nbsp;FullStack Web Developer</span>

              <div className="scroll-down-icon para">
                <ScrollDownIcon />
              </div>
            </h1>
          </div>

          <img
            id="img-5"
            className="para"
            alt="parallax-vector"
            src="/images/home/5.png"
            srcSet="/images/home/500w/5.png 500w,
                    /images/home/5.png 3686w"
            sizes="(max-width: 500px) 100vw,
                   (min-width: 501px) 100vw"
          />
          <img
            id="img-4"
            className="para"
            alt="parallax-vector"
            src="/images/home/4.png"
            srcSet="/images/home/500w/4.png 500w,
                    /images/home/4.png 3686w"
            sizes="(max-width: 500px) 100vw,
                   (min-width: 501px) 100vw"
          />
          <img
            id="img-3"
            className="para"
            alt="parallax-vector"
            src="/images/home/3.png"
            srcSet="/images/home/500w/3.png 500w,
                    /images/home/3.png 3686w"
            sizes="(max-width: 500px) 100vw,
                   (min-width: 501px) 100vw"
          />
          <img
            id="img-2"
            className="para"
            alt="parallax-vector"
            src="/images/home/2.png"
            srcSet="/images/home/500w/2.png 500w,
                    /images/home/2.png 3686w"
            sizes="(max-width: 500px) 100vw,
                   (min-width: 501px) 100vw"
          />
          <img
            id="img-1"
            className="para"
            alt="parallax-vector"
            src="/images/home/1.png"
            srcSet="/images/home/500w/1.png 500w,
                    /images/home/1.png 3686w"
            sizes="(max-width: 500px) 100vw,
                   (min-width: 501px) 100vw"
          />

          {/* Birds */}
          { screenWidth && (
            <>
              <BirdGif
                id="bird-1"
                initialTop={50}
                left="-2"
                moveSpeed={screenWidth / 50}
              />
              <BirdGif
                id="bird-2"
                initialTop={65}
                left="-44"
                moveSpeed={screenWidth / 60}
              />
              <BirdGif
                id="bird-3"
                initialTop={48}
                left="-50"
                moveSpeed={screenWidth / 55}
              />
              <BirdGif
                id="bird-4"
                initialTop={46}
                left="-40"
                moveSpeed={screenWidth / 45}
              />
              <BirdGif
                id="bird-5"
                initialTop={70}
                left="-7"
                moveSpeed={screenWidth / 50}
              />
            </>
          )}
        </div>

        {/* <img className="test-image" alt="parallax-vector" src="/images/image-4.png" /> */}
      </section>
    </Element>

  );
}

export default Home;
