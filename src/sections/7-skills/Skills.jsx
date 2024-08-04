import React from 'react';
import './Skills.scss';
import { Element } from 'react-scroll';
import AnimateSkill from './animate-skills/AnimateSkill';

function Skills() {
  return (
    <Element id="scroll-skills" name="scroll-skills">
      <section className="skills-section">
        <h1 className="skills-header">Skills</h1>
        <div className="front">
          <p>Front end:</p>
        </div>
        <div className="back">
          <p>Back end:</p>
        </div>
        <div className="other">
          <p>Other:</p>
        </div>
      </section>
      <AnimateSkill />
    </Element>

  );
}

export default Skills;
