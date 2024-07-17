import React, { useState, useEffect } from 'react';
import CardButton from './cardButton/CardButton';
import TechBox from './techBox/TechBox';
import './ProjectDescription.scss';

function ProjectDescription({ projectData, color, background }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(projectData);
  }, [projectData]);

  return (
    <div className="project-description">
      <p className="project-text">{data && (data.landingText)}</p>

      <div className="tech-used">
        {data && data.usedTech.map((tech) => (
          <TechBox text={tech} tech={tech} color={color} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDescription;
