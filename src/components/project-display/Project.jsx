/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import ProjectCarousel from './carousel/ProjectCarousel';
import ProjectDescription from './card/ProjectDescription';
import CardButton from './card/cardButton/CardButton';
import './Project.scss';

function Project({
  projectData,
  cardButtonPath,
  cardButtonBackground = 'white',
  cardButtonColor = 'black',
  projectDescritpionColor = 'black',
}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(projectData);
  }, [projectData]);

  return (
    <div className="project-description-background">

      {/* HEADER */}
      <header className="header">
        {data && (data.name)}
      </header>

      {/* Link Buttons */}
      <div className="buttons-container">
        <CardButton
          path={cardButtonPath}
          text="Case Study"
          background={cardButtonBackground}
          color={cardButtonColor}
        />
        {data && (
        <>
          <CardButton
            path={data.demoLink}
            text="Live Demo"
            background={cardButtonBackground}
            color={cardButtonColor}
          />
          <CardButton
            path={data.gitLink}
            text="Code"
            background={cardButtonBackground}
            color={cardButtonColor}
          />
        </>
        )}
      </div>

      {/* Carousel */}
      {data && (
      <ProjectCarousel
        images={data.images}
        videos={data.embedData}
      />
      )}

      {/* Project Description */}
      {data && (
      <ProjectDescription
        projectData={data}
        color={projectDescritpionColor}
      />
      )}
    </div>
  );
}

export default Project;
