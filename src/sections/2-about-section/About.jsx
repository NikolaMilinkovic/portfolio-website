/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import { Link, Element } from 'react-scroll';
import useElementOnScreen from '../../util/useElementOnScreen';

import './About.scss';

function About() {
  const [isImgVisible, setIsImgVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  }, isVisible, setIsVisible, true);

  const [imageRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }, isImgVisible, setIsImgVisible, true);

  return (
    <>
      <Element id="scroll-about" name="scroll-about" />
      <section className="about-section">
        <div className="about-left" ref={containerRef}>
          <p className={`about-section-hero-text ${isImgVisible ? 'show-element-left' : 'hide-element-left'}`}>
            About Me
          </p>
          <div className="border-div" />
          <img ref={imageRef} alt="Nikola Milinkovic" src="/images/moja-slika.png" className={`profile-image ${isVisible ? 'show-element-left' : 'hide-element-left'}`} />
        </div>
        <div className="about-right">
          <h2 className={`about-header ${isVisible ? 'show-element-right' : 'hide-element-right'}`}>
            My name is Nikola,
            <br />
            {' '}
            Full Stack Web Developer from Europe.
            <div className={`header-underline ${isVisible ? 'show-element-right' : 'hide-element-right'}`} />
          </h2>
          <article className={`about-article ${isVisible ? 'show-element-right' : 'hide-element-right'}`}>
            <p className="about-text">
              For some time now I&apos;ve been deeply immersed in web development. My humble beginnings in this career path came through self-study and
              {' '}
              <a className="link" href="https://www.theodinproject.com/" target="_blank">
                TheOdinProject
              </a>
              {' '}
              curriculum. While my academic background is also programming-centric, my tangible knowledge has largely come from my self-taught journey, tinkering with new techonologies and working on projects.
            </p>
            <p className="about-text">
              I enjoy building fun, pleasing and usefull applications that aim to solve problems, enhance workflows and or at very least bring a smile to the face of its user. At this moment I am freelancing, crafting web apps and looking out for full time opportunities.
            </p>
            <p className="about-text">
              Looking to collaborate, work together, or grab a cup of coffee and talk about tech? Get in touch by clicking the button bellow!
            </p>

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
              </Link>
            </button>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
