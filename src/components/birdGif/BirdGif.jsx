import React, { useEffect, useState, useRef } from 'react';
import './BirdGif.scss';

function BirdGif({
  id, left = '-10vw', initialTop, moveSpeed, onClick = null,
}) {
  const [top, setTop] = useState(initialTop);
  const [speed, setSpeed] = useState(moveSpeed);
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
      // Checks to see if rand is in the range of top + 10 || top - 10
      // If its outside the range returns true
      function checkRand(rand) {
        return rand < top - 10 || rand > top + 10;
      }

      const includesBirdEl = e.composedPath().includes(birdRef.current);
      if (birdRef.current && includesBirdEl) {
        let rand = getRand(35, 80);

        if (id === 'bird-3') {
          console.log('%c🦜 You found the magical bird!', 'color: #FF9F1C; font-size: 16px;');
        }

        // When rand returns TRUE the ! will turn it to FALSE thus ending the loop.
        while (!checkRand(rand)) {
          rand = getRand(35, 80);
        }

        setTop(rand);
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
