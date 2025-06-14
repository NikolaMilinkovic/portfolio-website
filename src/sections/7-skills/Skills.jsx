/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import './Skills.scss';
import { Element } from 'react-scroll';
import TechBox from '../../components/project-display/card/techBox/TechBox';
import useElementOnScreen from '../../util/useElementOnScreen';

function Skills() {
  const [data, setData] = useState(null);
  const languagesRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const otherRef = useRef(null);
  const databaseRef = useRef(null);
  useEffect(() => {
    async function getData() {
      const res_1 = await fetch('/files/other/skills.json');
      const fetchedData = await res_1.json();
      setData(fetchedData);
    }
    getData();
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }, isVisible, setIsVisible, true);

  useEffect(() => {
    if (isVisible) {
      languagesRef.current.classList.add('show-left');
      setTimeout(() => {
        frontRef.current.classList.add('show-left');
      }, 100);
      setTimeout(() => {
        backRef.current.classList.add('show-left');
      }, 200);
      setTimeout(() => {
        databaseRef.current.classList.add('show-left');
      }, 300);
      setTimeout(() => {
        otherRef.current.classList.add('show-left');
      }, 400);
    }
  }, [isVisible, containerRef]);

  return (
    <Element id="scroll-skills" name="scroll-skills">
      <section className="skills-section" ref={containerRef}>
        <h1 className="skills-header">Skills & Projects</h1>
        <div className="languages" ref={languagesRef}>
          <p>Languages:</p>
          <div className="tech-icons-container">
            {data && data.languages.map((tech, index) => (
              <TechBox text={tech} tech={tech} color="white" key={`languages-tech-${index}`} />
            ))}
          </div>
        </div>
        <div className="front" ref={frontRef}>
          <p>Front end:</p>
          <div className="tech-icons-container">
            {data && data.frontEnd.map((tech, index) => (
              <TechBox text={tech} tech={tech} color="white" key={`frontend-tech-${index}`} />
            ))}
          </div>
        </div>
        <div className="back" ref={backRef}>
          <p>Back end:</p>
          <div className="tech-icons-container">
            {data && data.backEnd.map((tech, index) => (
              <TechBox text={tech} tech={tech} color="white" key={`backend-tech-${index}`} />
            ))}
          </div>
        </div>
        <div className="database" ref={databaseRef}>
          <p>Database:</p>
          <div className="tech-icons-container">
            {data && data.database.map((tech, index) => (
              <TechBox text={tech} tech={tech} color="white" key={`other-tech-${index}`} />
            ))}
          </div>
        </div>
        <div className="other" ref={otherRef}>
          <p>Other:</p>
          <div className="tech-icons-container">
            {data && data.other.map((tech, index) => (
              <TechBox text={tech} tech={tech} color="white" key={`other-tech-${index}`} />
            ))}
          </div>
        </div>
      </section>
    </Element>

  );
}

export default Skills;
