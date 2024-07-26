import React, { useEffect, useState, useRef } from 'react';
import './BirdGif.scss';

function BirdGif({
  id, left = '-10vw', initialTop, moveSpeed,
}) {
  const [top, setTop] = useState(initialTop);
  const [speed, setSpeed] = useState(moveSpeed);
  const [toggler, setToggler] = useState(1);
  const birdRef = useRef(null);

  function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    const updateTop = () => {
      const randomTop = getRand(40, 70);
      setTop(randomTop);
    };

    const interval = setInterval(updateTop, speed * 1000);

    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    function clickBird(e) {
      const includesBirdEl = e.composedPath().includes(birdRef.current);
      if (birdRef.current && includesBirdEl) {
        if (toggler) {
          setTop((prev) => prev + 20);
          setToggler(0);
        } else {
          setTop((prev) => prev - 20);
          setToggler(1);
        }
      }
    }

    document.body.addEventListener('click', clickBird);
    return () => {
      document.body.removeEventListener('click', clickBird);
    };
  }, [top]);

  return (
    <img
      draggable={false}
      ref={birdRef}
      src="/images/gifs/bird.gif"
      alt="bird"
      className="bird"
      id={id}
      style={{
        left: `${left}vw`, top: `${top}vh`, animationDuration: `${speed}s`,
      }}
    />
  );
}

export default BirdGif;
