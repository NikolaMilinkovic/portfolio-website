/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import './ProjectCarousel.scss';

function ProjectCarousel({ filePath }) {
  const [data, setData] = useState(null);
  const [previousIndex, setPreviousIndex] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const windowRef = useRef(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(filePath);
      const projectData = await response.json();
      setData(projectData);
    }
    getData();
  }, [filePath]);

  useEffect(() => {
    console.log(`PreviousIndex: ${previousIndex} ; CurrentIndex: ${currentIndex} ; NextIndex: ${nextIndex} ;`);
  }, [previousIndex, currentIndex, nextIndex]);

  function handleNext() {
    console.log('Calling next');
    if (data && data.images) {
      const updateMethod = (prevState) => (prevState + 1) % data.images.length;
      setPreviousIndex(updateMethod);
      setCurrentIndex(updateMethod);
      setNextIndex(updateMethod);
    }
  }

  function handlePrevious() {
    console.log('Calling previous');
    if (data && data.images) {
      const updateMethod = (prevState) => (prevState === 0 ? data.images.length - 1 : prevState - 1);
      setPreviousIndex(updateMethod);
      setCurrentIndex(updateMethod);
      setNextIndex(updateMethod);
    }
  }

  return (
    <section className="project-carousel">
      <div className="image-wrapper">
        <div className={`image-window index-${currentIndex}`}>

          {data?.images && data.images.map((image, index) => (
            <img
              key={index}
              className="carousel-img"
              loading="lazy"
              src={image}
              alt="project description"
            />
          ))}
        </div>
        <div className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>

      {/* <div className="project-info-container">
        <header>
          {data?.name && (
          <h2>{data.name}</h2>
          )}
        </header>
      </div> */}

    </section>
  );
}

export default ProjectCarousel;
