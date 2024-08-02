/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import ProjectDescription from './card/ProjectDescription';
import useElementOnScreen from '../../util/useElementOnScreen';
import SwipeCarousel from './carousel/ProjectCarousel2.jsx/SwipeCarousel';
import './Project.scss';
import { useNavigate } from 'react-router-dom';

function Project({
  projectData,
  caseStudyLink = '',
  projectDescritpionColor = 'black',
  animateSide = 'left',
  timeout = 0,
  headerColor = 'black',
  mTop = '100%',
  mBottom = '100%',
  customHeader = '',
  type = 1,
}) {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(animateSide);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState('');
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }, isVisible, setIsVisible, true);

  useEffect(() => {
    setCaseStudy(caseStudyLink);
  }, [caseStudyLink]);
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
    function handleClasses() {
      if (containerRef.current) {
        containerRef.current.classList.remove('hide-left');
        containerRef.current.classList.remove('hide-right');
        containerRef.current.classList.add(
          direction === 'left'
            ? (isVisible ? 'show-left' : 'hide-left')
            : (isVisible ? 'show-right' : 'hide-right'),
        );
      }
    }

    // Runs once to remove delay when using react-scroll
    // as it will rerender the component each time
    // If we have delay it will only do it once
    if (hasLoadedOnce === false) {
      const timeoutId = setTimeout(() => {
        handleClasses();
        setHasLoadedOnce(true);
      }, timeout);

      return () => clearTimeout(timeoutId);
    }

    // Runs always
    handleClasses();
  }, [isVisible, direction, containerRef, timeout, hasLoadedOnce]);

  return (
    <div
      className="project-description-background"
      style={{
        marginTop: mTop, marginBottom: mBottom, color: headerColor, height: type === 2 ? '90vh' : '100vh',
      }}
      ref={containerRef}
    >
      {data && type === 2 && (
        <SwipeCarousel
          images={data.images}
        />
      )}
      {/* HEADER */}
      <header
        className="header"
        style={{
          marginTop: type === 2 ? '2rem' : '4rem',
        }}
      >
        <h1
          className="header-h1"
          style={{ color: headerColor, marginTop: type === 2 ? 'unset' : '0px' }}
        >
          {data && (data.name)}
          <br />
          {customHeader}
        </h1>
        <div className="header-links">
          {data && (
            <>
              <a className="header-icon-link link-demo" href={data.demoLink} target="_blank">
                <img className="header-icon" alt="Demo" src={headerColor === 'black' ? '/icons/black/desktop-solid.svg' : '/icons/white/desktop-solid-w.svg'} />
              </a>
              <a className="header-icon-link link-git" href={data.gitLink} target="_blank">
                <img className="header-icon" alt="GitHub" src={headerColor === 'black' ? '/icons/black/code-solid.svg' : '/icons/white/code-solid-w.svg'} />
              </a>
              {caseStudy && (
              <button className="header-icon-link link-case-study" onClick={() => navigate(caseStudy)} type="button">
                <img className="header-icon" alt="Case study" src={headerColor === 'black' ? '/icons/black/circle-info-solid.svg' : '/icons/white/circle-info-solid-w.svg'} />
              </button>
              )}

            </>
          )}
        </div>
      </header>
      {/* <div className="layout-testing"> */}
      {/* Carousel */}
      {/* <div> */}
      {data && type === 1 && (
        <SwipeCarousel
          images={data.images}
        />
      )}
      {/* </div> */}
      {/* Project Description */}
      {data && type === 1 && (
        <ProjectDescription
          projectData={data}
          color={projectDescritpionColor}
          caseStudyPath={caseStudyLink || '#'}
        />
      )}
    </div>
  // </div>

  );
}

export default Project;
