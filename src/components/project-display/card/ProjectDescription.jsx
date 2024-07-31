/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import TechBox from './techBox/TechBox';
import './ProjectDescription.scss';

function ProjectDescription({ projectData, color, caseStudyPath = '#' }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(projectData);
  }, [projectData]);

  return (
    <div className="project-description">
      <p className="project-text">
        {data && (data.landingText)}
        {' '}
        For more information see this projects
        {' '}
        <a className="case-study-link" href={caseStudyPath}>case study.</a>
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
