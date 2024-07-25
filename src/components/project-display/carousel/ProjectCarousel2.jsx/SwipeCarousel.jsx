import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import './SwipeCarousel.scss';

const ONE_SECOND = 1000;
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
              // className="carousel-img"
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
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            animate={{
              scale: imgIndex === index ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="carousel-image-div"
          />
        ))}
        {/* <Images imgIndex={imgIndex} /> */}
      </motion.div>

      {/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} /> */}
    </div>
  );
}

function Images({ imgIndex }) {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: imgIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
        />
      ))}
    </>
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
