/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import CardButton from '../card/cardButton/CardButton';
import useWindowDimensions from '../../../util/windowDimentions';
import './OtherProjectsCarousel.scss';

function OtherProjectsCarousel({ projects }) {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screens, setScreens] = useState(2);
  const { width } = useWindowDimensions();
  // @media screen and (max-width: 1000px){
  // min-width: calc(100% / 3) !important;

  // @media screen and (max-width: 800px){
  // min-width: calc(100% / 2) !important;

  // @media screen and (max-width: 550px){
  // min-width: calc(100% / 1) !important;

  useEffect(() => {
    function getScreens() {
      if (width > 1000) {
        // 4 per page

        setScreens(Math.round(data.length / 4));
      }
      if (width < 1000 && width > 800) {
        // 3 per page
        setScreens(Math.round(data.length / 3));
      }
      if (width < 800 && width > 550) {
        // 2 per page
        setScreens(Math.round(data.length / 2));
      }
      if (width <= 550) {
        // 1 per page
        setScreens(Math.round(data.length / 1));
      }
    }

    window.addEventListener('resize', getScreens);
    getScreens();

    return () => {
      window.removeEventListener('resize', getScreens);
    };
  }, [data, width]);

  useEffect(() => {
    setData(projects);
  }, [projects]);

  // Arrow methods
  function handleNext() {
    if (data) {
      const updateMethod = (prevState) => (prevState + 1) % screens;
      setCurrentIndex(updateMethod);
    }
  }
  function handlePrevious() {
    if (data) {
      const updateMethod = (prevState) => (prevState === 0 ? screens - 1 : prevState - 1);
      setCurrentIndex(updateMethod);
    }
  }

  return (
    <div className="other-projects-wrapper">
      <div className="left" onClick={handlePrevious}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </div>
      <section className="other-projects">
        <div className="image-window" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {data && data.map((project, index) => (
            <div className="project-card" href={project.gitLink} target="_blank">
              <div className="project-card-inside">
                <p className="header">{project.name}</p>
                <img
                  key={`carousel-image-${index}`}
                  className="carousel-img"
                  src={project.images[0]}
                  alt="project description"
                />
                <div className="buttons-container">
                  <CardButton
                    className="button"
                    path={project.gitLink}
                    text="Code"
                  />
                  <CardButton
                    className="button"
                    path={project.demoLink}
                    text="Live"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="right" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
    </div>
  );
}

export default OtherProjectsCarousel;
