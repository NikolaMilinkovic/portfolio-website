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

  const scene_3 = useRef(null);

  // Fade in leaves
  const leavesRight = useRef(null);
  const leavesLeft = useRef(null);

  // Rest
  const fox_sitting = useRef(null);
  const fox_jumping = useRef(null);
  const rock_0 = useRef(null);
  const rock_1 = useRef(null);
  const rock_2 = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Fade in leaves
      leavesRight.current.classList.add('leaf-right-fade-out');
      leavesLeft.current.classList.add('leaf-left-fade-out');
      // containerRef.current.classList.add('fade-in');
      containerRef.current.classList.add('scene-fade-in');


      // ROCKS
      fox_sitting.current.classList.add('fade-in');
      fox_jumping.current.classList.add('fade-in');
      rock_0.current.classList.add('fade-in');
      rock_1.current.classList.add('fade-in');
      rock_2.current.classList.add('fade-in');
    }
  }, [isVisible, containerRef]);
  return (
    <div ref={containerRef} className="scene-3">
      <img className="static-asset fox-sitting" alt="Fox sitting" src="/images/animation-3/fox-sitting-1x-loop.gif" ref={fox_sitting} />
      <img className="static-asset fox-jumping" alt="Fox jumping" src="/images/animation-3/fox-jumping.gif" ref={fox_jumping} />
      <img className="static-asset rock-0" alt="rock" src="/images/animation-3/rock-0.svg" ref={rock_0} />
      <img className="static-asset rock-1" alt="rock" src="/images/animation-3/rock_1b.png" ref={rock_1} />
      <img className="static-asset rock-2" alt="rock" src="/images/animation-3/rock-0.svg" ref={rock_2} />

      <img className="static-asset leaf-left" alt="leaf left" src="/images/animation-1/fade-in-leaves-left.webp" ref={leavesLeft} />
      <img className="static-asset leaf-right" alt="leaf right" src="/images/animation-1/fade-in-leaves-right.webp" ref={leavesRight} />
    </div>
  );
}

export default AnimatePr3;
