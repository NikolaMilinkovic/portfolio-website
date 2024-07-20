/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './ProjectCarousel.scss';
import PlayYoutube from './video/PlayYoutube';

function ProjectCarousel({ images = [], videos = [], arrowColor = 'white' }) {
  const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && videoData) {
      // console.log(data.length);
      // console.log(videoData.length);
    }
  }, [data, videoData]);

  useEffect(() => {
    setData(images);
  }, [images]);

  useEffect(() => {
    setVideoData(videos);
    if (videos.length !== 0) {
      setData((prev) => [...prev, videos]);
    }
  }, []);

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
    <div className="project-carousel">
      {/* ARROW LEFT */}
      <div className="left" onClick={handlePrevious}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
          fill={arrowColor}
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </div>

      {/* SLIDER */}
      <div className="projects">
        <div className="image-window" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {/* IMAGES & VIDEOS */}
          {videoData && videoData.map((video, index) => (
            <div className="video-container">
              <PlayYoutube
                videoData={video}
                key={`video-${index}`}
              />
            </div>
          ))}
          {images && images.map((image, index) => (
            <div className="image-container">
              <img
                key={`carousel-image-${index}`}
                className="carousel-img"
                src={image}
                alt="project description"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ARROW RIGHT */}
      <div className="right" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
          fill={arrowColor}
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
    </div>

  );
}

export default ProjectCarousel;
