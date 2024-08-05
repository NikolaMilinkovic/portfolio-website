/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import TechBox from './techBox/TechBox';
import './ProjectDescription.scss';
import { useNavigate } from 'react-router-dom';

function ProjectDescription({ projectData, color, caseStudyPath = '#' }) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const caseStudyRef = useRef(null);

  useEffect(() => {
    const element = caseStudyRef.current;
    function handleMouseDown(event) {
      if (event.button === 1) {
        event.preventDefault();
        console.log('mm clicked');
      }
    }

    if (element) {
      element.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, []);

  useEffect(() => {
    setData(projectData);
  }, [projectData]);

  return (
    <div className="project-description">
      <p className="project-text">
        {data && (data.landingText)}
        {caseStudyPath !== '#' && (
          <>
            {' '}
            For more information see this projects
            {' '}
            <button className="case-study-link" onClick={() => navigate(caseStudyPath)} type="button" ref={caseStudyRef}>case study.</button>
          </>
        )}

      </p>

      <div className="tech-used">
        {data && data.usedTech.map((tech, index) => (
          <TechBox text={tech} tech={tech} color={color} key={`tech-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDescription;
