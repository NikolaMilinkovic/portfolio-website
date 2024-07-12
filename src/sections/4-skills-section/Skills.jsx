import React from 'react';
import { Element } from 'react-scroll';
import './Skills.scss';

function Skills() {
  return (
    <section className="skills-section">
      <Element id="scroll-skills" name="scroll-skills">
        <p>This is my Skills section</p>
      </Element>
    </section>
  );
}

export default Skills;
