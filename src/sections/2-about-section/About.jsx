import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
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
            Random inspiring header
            <div className={`header-underline ${isVisible ? 'show-element-right' : 'hide-element-right'}`} />
          </h2>
          <article className={`about-article ${isVisible ? 'show-element-right' : 'hide-element-right'}`}>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt soluta veniam. Explicabo ipsum quis minima labore esse? Impedit quia laudantium excepturi nostrum tenetur necessitatibus eaque nisi debitis inventore illo.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
