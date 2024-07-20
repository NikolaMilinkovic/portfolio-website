import React, { useEffect, useState } from 'react';
import './BirdGif.scss';

function BirdGif({
  id, left = '-10vw', initialTop, speed,
}) {
  const [top, setTop] = useState(initialTop);

  function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    const updateTop = () => {
      const randomTop = getRand(40, 70); // Change this range to fit your needs
      setTop(`${randomTop}vh`); // Use vh or other units as appropriate
    };

    const interval = setInterval(updateTop, speed * 1000);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <img
      src="/images/gifs/bird.gif"
      alt="bird"
      className="bird"
      id={id}
      style={{
        left: `${left}vw`, top, animationDuration: `${speed}s`,
      }}
    />
  );
}

export default BirdGif;
