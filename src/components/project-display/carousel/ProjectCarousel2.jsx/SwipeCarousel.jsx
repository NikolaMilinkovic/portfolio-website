import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import './SwipeCarousel.scss';

const DRAG_BUFFER = 30;

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
      console.log('Setting to last image now!');
      setImgIndex(imgs.length - 1);
    } else if (x <= -DRAG_BUFFER && imgIndex === imgs.length - 1) {
      console.log('Setting to last image now!');
      setImgIndex(0);
    }
  };
  useEffect(() => {
    console.log(imgIndex);
  }, [imgIndex]);
  return (
    <div className="carousel">
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
          // <div key={`carousel-image-${index}`}>
          <motion.img
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

      {/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} /> */}
    </div>
  );
}

function Dots({ imgIndex, setImgIndex, imgs }) {
  const [dotImgs, setDotImgs] = useState([]);
  useEffect(() => {
    setDotImgs(imgs);
  }, [imgs]);
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {dotImgs && dotImgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? 'bg-neutral-50' : 'bg-neutral-500'
          }`}
        />
      ))}
    </div>
  );
}

export default SwipeCarousel;
