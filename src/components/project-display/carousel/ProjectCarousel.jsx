/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './ProjectCarousel.scss';

function ProjectCarousel({ images }) {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('Data is:');
    console.log(data);
  }, [data]);

  useEffect(() => {
    setData(images);
  }, [images]);

  // Arrow methods
  function handleNext() {
    if (data) {
      const updateMethod = (prevState) => (prevState + 1) % data.length;
      setCurrentIndex(updateMethod);
    }
  }
  function handlePrevious() {
    if (data) {
      const updateMethod = (prevState) => (prevState === 0 ? data.length - 1 : prevState - 1);
      setCurrentIndex(updateMethod);
    }
  }

  return (
    <section className="project-carousel">
      <div className="image-wrapper">
        <div className="image-window" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

          {data && data.map((image, index) => (
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
