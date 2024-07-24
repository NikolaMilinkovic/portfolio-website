/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import ProjectCarousel from './carousel/ProjectCarousel';
import ProjectDescription from './card/ProjectDescription';
import CardButton from './card/cardButton/CardButton';
import useElementOnScreen from '../../util/useElementOnScreen';
import './Project.scss';

function Project({
  projectData,
  cardButtonPath,
  cardButtonBackground = 'white',
  cardButtonColor = 'black',
  projectDescritpionColor = 'black',
  animateSide = 'left',
  arrowColor,
  showCaseStudyBtn = true,
  timeout = 0,
  headerColor = 'black',
}) {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(animateSide);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }, isVisible, setIsVisible, true);

  useEffect(() => {
    setData(projectData);
  }, [projectData]);

  useEffect(() => {
    containerRef.current.classList.add(
      direction === 'left'
        ? (isVisible ? 'show-left' : 'hide-left')
        : (isVisible ? 'show-right' : 'hide-right'),
    );
  }, [animateSide, containerRef, isVisible, direction]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.remove('hide-left');
        containerRef.current.classList.remove('hide-right');
        // if (direction === 'right' || direction === 'left') {
        containerRef.current.classList.add(
          direction === 'left'
            ? (isVisible ? 'show-left' : 'hide-left')
            : (isVisible ? 'show-right' : 'hide-right'),
        );
        // }
        // if (direction === 'center') {
        //   containerRef.current.classList.add('show-center');
        // }
      }
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [isVisible, direction, containerRef, timeout]);

  return (
    <div
      className="project-description-background"
      ref={containerRef}
    >

      {/* HEADER */}
      <header className="header">
        <h1 className="header-h1" style={{ color: headerColor }}>
          {data && (data.name)}
        </h1>

        <div className="buttons-container">
          {showCaseStudyBtn && (
          <CardButton
            path={cardButtonPath}
            text="Case Study"
            background={cardButtonBackground}
            color={cardButtonColor}
          />
          )}
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
      </header>

      {/* Link Buttons */}

      {/* Carousel */}
      {data && (
      <ProjectCarousel
        images={data.images}
        videos={data.embedData}
        arrowColor={arrowColor}
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
