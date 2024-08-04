/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useRef, useEffect } from 'react';
import CardButton from '../../card/cardButton/CardButton';
import './ProjectCard.scss';

function ProjectCard({ project, index, isVisible = false }) {
  const [data, setData] = useState(project || null);
  const container = useRef(null);
  useEffect(() => {
    setData(project);
  }, [project]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        if (container.current) {
          container.current.classList.add('show-left');
          container.current.classList.remove('hide-left');
        }
      }, index * 110);
    }
  }, [isVisible, index]);
  return (
    <>
      {data && (
      <div
        ref={container}
        className="project-card hide-left"
        href={data.gitLink}
        target="_blank"
      >
        <div className="project-card-inside">
          <p className="header">{data.name}</p>
          <img
            key={`carousel-image-${index}`}
            className="carousel-img"
            src={data.images[0]}
            alt="project description"
          />
          <div className="buttons-container">
            <CardButton
              className="button"
              path={data.gitLink}
              text="Code"
            />
            <CardButton
              className="button"
              path={data.demoLink}
              text="Live"
            />
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default ProjectCard;
