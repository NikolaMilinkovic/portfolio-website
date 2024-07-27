/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import useElementOnScreen from '../../../util/useElementOnScreen';
import './AnimatePr3.scss';

function AnimatePr3() {
  const [isVisible, setIsVisible] = useState(false);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }, isVisible, setIsVisible, true);

  // Fade in leaves
  const fox_sitting = useRef(null);
  const fox_jumping = useRef(null);
  const rock_0 = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Fade in leaves
      containerRef.current.classList.add('fade-in');

      // ROCKS
      rock_0.current.classList.add('move-rock-0');
    }
  }, [isVisible, containerRef]);
  return (
    <div ref={containerRef} className="scene-3">
      <img className="static-asset fox-sitting" alt="Fox sitting" src="/images/animation-3/fox-sitting.gif" ref={fox_sitting} />
      <img className="static-asset fox-jumping" alt="Fox jumping" src="/images/animation-3/fox-jumping.gif" ref={fox_jumping} />
      <img className="static-asset rock-0" alt="rock" src="/images/animation-3/rock-0.svg" ref={rock_0} />
      <img className="static-asset rock-1" alt="rock" src="/images/animation-3/rock_1b.png" ref={rock_0} />
      <img className="static-asset rock-2" alt="rock" src="/images/animation-3/rock-0.svg" ref={rock_0} />
    </div>
  );
}

export default AnimatePr3;
