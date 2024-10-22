/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import './SwipeCarousel.scss';

const DRAG_BUFFER = 10;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 2,
  stiffness: 300,
  damping: 60,
};

function SwipeCarousel({ images = [] }) {
  const [imgs, setImgs] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const carouselRef = useRef(null);

  // Horizontal Shift Scroll for carousel
  useEffect(() => {
    const element = carouselRef.current;

    const handleScrollDown = () => {
      if (imgIndex > imgs.length - 2) {
        setImgIndex(0);
      } else {
        setImgIndex((prev) => prev + 1);
      }
    };
    const handleScrollUp = () => {
      if (imgIndex < 1) {
        setImgIndex(imgs.length - 1);
      } else {
        setImgIndex((prev) => prev - 1);
      }
    };

    const handleWheel = (event) => {
      if (event.shiftKey) {
        event.preventDefault();
        if (event.deltaY < 0) {
          handleScrollUp();
        } else if (event.deltaY > 0) {
          handleScrollDown();
        }
      }
    };

    if (element) {
      element.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, [carouselRef, imgIndex, imgs]);

  useEffect(() => {
    setImgs(images);
  }, [images]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    } else if (x >= DRAG_BUFFER && imgIndex === 0) {
      setImgIndex(imgs.length - 1);
    } else if (x <= -DRAG_BUFFER && imgIndex === imgs.length - 1) {
      setImgIndex(0);
    }
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="motion-div"
      >
        {images && images.map((image, index) => (
          <motion.img
            key={`img-${index}`}
            src={image.src}
            srcSet={`
                  ${image.srcSet.img400w} 400w,
                  ${image.srcSet.img600w} 600w,
                  ${image.srcSet.img800w} 800w,
                  ${image.srcSet.img1024w} 1024w,
                  ${image.srcSet.img1440w} 1440w,
                  ${image.srcSet.img1600w} 1600w,
                  ${image.srcSet.img2000w} 2000w,
                  ${image.srcSet.img2500w} 2500w`}
            sizes="(max-width: 400px) 100vw,
                       (max-width: 600px) 100vw,
                       (max-width: 800px) 100vw,
                       (max-width: 1024px) 100vw,
                       (max-width: 1440px) 100vw,
                       (max-width: 1600px) 100vw,
                       (max-width: 2000px) 100vw,
                       (max-width: 2500px) 100vw"
            alt={image.src}
            animate={{
              scale: imgIndex === index ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="carousel-image-div"
          />
        ))}
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />
    </div>
  );
}

function Dots({ imgIndex, setImgIndex, imgs }) {
  const [dotImgs, setDotImgs] = useState([]);
  useEffect(() => {
    setDotImgs(imgs);
  }, [imgs]);
  return (
    <div className="dots-container">
      {dotImgs && dotImgs.map((_, idx) => (
        <button
          type="button"
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`dot ${
            idx === imgIndex ? 'active-dot' : 'neutral-dot'
          }`}
        />
      ))}
    </div>
  );
}

export default SwipeCarousel;
