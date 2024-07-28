/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import useElementOnScreen from '../../../../util/useElementOnScreen';
import useWindowDimensions from '../../../../util/windowDimentions';
import SwiperCard from './SwiperCard';
import './OtherProjectsSwiper.scss';

const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 2,
  stiffness: 300,
  damping: 60,
};

function OtherProjectsSwiper({ projects }) {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screens, setScreens] = useState(2);
  const { width } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(false);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }, isVisible, setIsVisible, true);
  const dragX = useMotionValue(0);
  const cardWidth = useRef(1);

  // Method for setting the number of screens based on user screen width
  useEffect(() => {
    function getScreens() {
      if (width > 1000) {
        // 4 per page
        setScreens(Math.round(data.length / 4));
        cardWidth.current = 4;
      }
      if (width < 1000 && width > 800) {
        // 3 per page
        setScreens(Math.round(data.length / 3));
        cardWidth.current = 3;
      }
      if (width < 800 && width > 550) {
        // 2 per page
        setScreens(Math.round(data.length / 2));
        cardWidth.current = 2;
      }
      if (width <= 550) {
        // 1 per page
        setScreens(Math.round(data.length / 1));
        cardWidth.current = 1;
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

  const onDragEnd = () => {
    const x = dragX.get();

    // Drag left and not at the last screen
    if (x <= -DRAG_BUFFER && currentIndex < screens - 1) {
      setCurrentIndex((prevState) => (prevState + 1));

    // Drag right and not at the first screen
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((prevState) => (prevState - 1));

    // Drag left at the last screen - no change
    } else if (x <= -DRAG_BUFFER && currentIndex === screens - 1) {
      // Stay at the last screen
      setCurrentIndex(currentIndex);

    // Drag right at the first screen - no change
    } else if (x >= DRAG_BUFFER && currentIndex === 0) {
      // Stay at the first screen
      setCurrentIndex(currentIndex);
    }
  };

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
    <div className="swiper-carousel">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="motion-div"
      >
        <motion.div
          transition={SPRING_OPTIONS}
          className="swiper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardWidth.current !== 0 && data && data.map((project, index) => (

            <SwiperCard
              key={`project-card-${index}`}
              project={project}
              index={index}
              isVisible
              className="swiper-card"
              width={`${100 / cardWidth.current}px`}
            />

          ))}
        </motion.div>
      </motion.div>
      <Dots index={currentIndex} setIndex={setCurrentIndex} dots={screens} />
    </div>
  );
}

function Dots({ index, setIndex, dots }) {
  console.log(`Current screens is : ${dots}`);
  const [dotImgs, setDotImgs] = useState([]);

  useEffect(() => {
    // Build and array with length of number of screens
    setDotImgs(Array.from({ length: dots }));
  }, [dots]);

  return (
    <div className="swiper-dots-container">
      {dotImgs.map((_, idx) => (
        <button
          type="button"
          key={idx}
          onClick={() => setIndex(idx)}
          className={`dot ${
            idx === index ? 'active-dot' : 'neutral-dot'
          }`}
        />
      ))}
    </div>
  );
}

export default OtherProjectsSwiper;
