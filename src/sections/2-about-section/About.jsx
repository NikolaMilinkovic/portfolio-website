import React from 'react';
import { Element } from 'react-scroll';
import './About.scss';

function About() {
  return (
    <section className="about-section">
      <Element id="scroll-about" name="scroll-about" />
      <p className="test-about-me">
        My Expertise
      </p>
    </section>
  );
}

export default About;
