import React from 'react';
import { Element } from 'react-scroll';
import './About.scss';

function About() {
  return (
    <>
      <Element id="scroll-about" name="scroll-about" />
      <section className="about-section">
        <div className="about-left">
          <p className="about-section-hero-text">
            About Me
          </p>
          <div className="border-div" />
          <img alt="Nikola Milinkovic" src="/images/moja-slika.png" className="profile-image" />
        </div>
        <div className="about-right">
          <h2 className="about-header">
            Random inspiring header
            <div className="header-underline" />
          </h2>
          <article className="about-article">
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt soluta veniam. Explicabo ipsum quis minima labore esse? Impedit quia laudantium excepturi nostrum tenetur necessitatibus eaque nisi debitis inventore illo.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
