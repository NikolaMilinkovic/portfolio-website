import React from 'react';
import { Element } from 'react-scroll';
import './About.scss';

function About() {
  return (
    <section className="about-section">
      <Element id="scroll-about" name="scroll-about">
        <p>This is my About section</p>
      </Element>
    </section>
  );
}

export default About;
