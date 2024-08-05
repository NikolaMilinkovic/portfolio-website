/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import TechBox from './techBox/TechBox';
import './ProjectDescription.scss';
import { useNavigate } from 'react-router-dom';

function ProjectDescription({ projectData, color, caseStudyPath = '#' }) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const caseStudyRef = useRef(null);
  const hiddenLink = useRef(null);

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
            <a href={`https://nikola-portfolio-website.vercel.app${caseStudyPath}`} target="_blank" ref={hiddenLink} rel="noopener noreferrer">
              <button className="case-study-link" onClick={() => navigate(caseStudyPath)} type="button" ref={caseStudyRef}>case study.</button>
            </a>
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
