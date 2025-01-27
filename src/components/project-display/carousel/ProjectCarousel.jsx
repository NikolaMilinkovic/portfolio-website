/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import './ProjectCarousel.scss';
import PlayYoutube from './video/PlayYoutube';

function ProjectCarousel({ images = [], videos = [], arrowColor = 'white' }) {
  const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setData(images);
  }, [images]);

  useEffect(() => {
    setVideoData(videos);
    if (videos.length !== 0) {
      setData((prev) => [...prev, videos]);
    }
  }, []);

  // SLIDER LOGIC
  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseUp = (e) => {
      isDown = false;
      slider.classList.remove('active');

      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      const totalScroll = scrollLeft - walk;
      const itemWidth = slider.clientWidth;
      const newIndex = Math.round(totalScroll / itemWidth);
      // setCurrentIndex(Math.round(newIndex));
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, [data]);

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
      <div className="projects" ref={sliderRef}>
        <div className="image-window">
          {/* style={{ transform: `translateX(-${currentIndex * 100}%)` }} */}

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
            <div className="image-container" key={`carousel-image-${index}`}>
              <img
                className="carousel-img"
                src={image.src}
                srcSet={`
                  ${image.SrcSet.img400w} 400w,
                  ${image.SrcSet.img600w} 600w,
                  ${image.SrcSet.img800w} 800w,
                  ${image.SrcSet.img1024w} 1024w,
                  ${image.SrcSet.img1440w} 1440w,
                  ${image.SrcSet.img1600w} 1600w,
                  ${image.SrcSet.img2000w} 2000w,
                  ${image.SrcSet.img2500w} 2500w`}
                sizes="(max-width: 400px) 100vw,
                       (max-width: 600px) 100vw,
                       (max-width: 800px) 100vw,
                       (max-width: 1024px) 100vw,
                       (max-width: 1440px) 100vw,
                       (max-width: 1600px) 100vw,
                       (max-width: 2000px) 100vw,
                       (max-width: 2500px) 100vw"
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
