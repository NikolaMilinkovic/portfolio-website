/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import useElementOnScreen from '../../util/useElementOnScreen';

import './About.scss';

function About() {
  const [isImgVisible, setIsImgVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }, isVisible, setIsVisible, true);

  const [imageRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }, isImgVisible, setIsImgVisible, true);

  return (
    <>
      <Element id="scroll-about" name="scroll-about" />
      <section className="about-section" ref={containerRef}>
        <div className="about-left">
          <p className={`about-section-hero-text ${isImgVisible ? 'show-element-left' : 'hide-element-left'}`}>
            About Me
          </p>
          <div className="border-div" />
          <img
            ref={imageRef}
            alt="Nikola Milinkovic"
            className={`profile-image ${isVisible ? 'show-element-left' : 'hide-element-left'}`}
            src="/images/aboutSection/IMG_6085-1200w.webp"
            // srcSet={`
            //   /images/aboutSection/IMG_4585-1200w.webp 1800w,
            //   /images/aboutSection/IMG_4585.webp 1801w,
            //   `}
            // sizes="(max-width: 1800px) 100vw,
            //        (min-width: 1801px) 100vw"
          />
        </div>
        <div className="about-right">
          <h1 className={`about-header ${isVisible ? 'show-element-right' : 'hide-element-right'}`}>
            My name is Nikola,
            <br />
            {' '}
            Full Stack Web Developer from Europe.
            <div className={`header-underline ${isVisible ? 'show-element-right' : 'hide-element-right'}`} />
          </h1>
          <article className={`about-article ${isVisible ? 'show-element-right' : 'hide-element-right'}`}>
            <p className="about-text">
              For some time now I&apos;ve been deeply immersed in web development. My humble beginnings in this career path came through self - study and
              {' '}
              <a className="link" href="https://www.theodinproject.com/" target="_blank">
                TheOdinProject
              </a>
              {' '}
              curriculum. While my academic background is also programming - centric, my tangible knowledge has largely come from my self - taught journey, tinkering with new techonologies and working on projects.
            </p>
            <p className="about-text">
              I enjoy building fun, pleasing and usefull applications that aim to solve problems, enhance workflows and or at very least bring a smile to the face of its user. At this moment I am freelancing, crafting web apps and looking out for full time opportunities.
            </p>
            {/* <p className="about-text">
              Looking to learn more about my career? Take a look at my CV by clicking the button bellow!
            </p>
            <div className="buttons-container">
              <button type="button" className="contact-me-btn">
                <Link
                  offset={-80}
                  name="Contact"
                  className="contact-me-link"
                  to="scroll-contact"
                  smooth
                  duration={800}
                >
                  Download my CV
                  <img className="link-icon" src="/icons/black/envelope-solid.svg" alt="envelope" />
                </Link>
              </button>
            </div> */}
            <p className="about-text">
              Looking to collaborate, work together, or grab a cup of coffee and talk about tech? Get in touch by clicking the button bellow!
            </p>

            <div className="buttons-container">

              <button type="button" className="contact-me-btn">
                <Link
                  offset={-80}
                  name="Contact"
                  className="contact-me-link"
                  to="scroll-contact"
                  smooth
                  duration={800}
                >
                  Contact me here!
                  {/* <img className="link-icon" src="/icons/black/envelope-solid.svg" alt="envelope" /> */}
                </Link>
              </button>
            </div>

          </article>
        </div>
      </section>
    </>
  );
}

export default About;
