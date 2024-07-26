/* eslint-disable camelcase */
import React, { useState, useEffect, useRef } from 'react';
import './AnimatePr1.scss';
import useElementOnScreen from '../../../util/useElementOnScreen';

function AnimatePr1() {
  const [isVisible, setIsVisible] = useState(false);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }, isVisible, setIsVisible, true);

  // Fade in leaves
  const leavesRight = useRef(null);
  const leavesLeft = useRef(null);

  // Wolves ref
  const wolf_0 = useRef(null);
  const wolf_1 = useRef(null);

  // Side Shrubs ref
  const shrub_0 = useRef(null);
  const shrub_1 = useRef(null);
  const shrub_2 = useRef(null);

  // Rock
  const rock_0 = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Fade in leaves
      leavesRight.current.classList.add('leaf-right-fade-out');
      leavesLeft.current.classList.add('leaf-left-fade-out');
      containerRef.current.classList.add('scene-fade-in');

      // SHRUBS
      shrub_0.current.classList.add('shrub-0-move');
      shrub_1.current.classList.add('shrub-1-move');
      shrub_2.current.classList.add('shrub-2-move');

      // ROCKS
      rock_0.current.classList.add('move-rock-0');

      // WOLVES
      setTimeout(() => {
        wolf_0.current.classList.add('move-wolf');
        wolf_1.current.classList.add('move-wolf');
      }, 500);
    }
  }, [isVisible, containerRef]);
  return (
    <div ref={containerRef} className="scene">
      <img className="static-asset shrub-0" alt="shrub" src="/images/animation-1/shrub-0.svg" ref={shrub_0} />
      <img className="static-asset shrub-1" alt="shrub" src="/images/animation-1/shrub-0.svg" ref={shrub_1} />
      <img className="static-asset shrub-2" alt="shrub" src="/images/animation-1/shrub-0.svg" ref={shrub_2} />
      <img className="static-asset wolf-0" alt="wolf" src="/images/animation-1/wolf.gif" ref={wolf_0} />
      <img className="static-asset wolf-1" alt="wolf" src="/images/animation-1/wolf.gif" ref={wolf_1} />
      <img className="static-asset rock-0" alt="rock" src="/images/animation-1/rock-0.svg" ref={rock_0} />
      <img className="static-asset leaf-left" alt="leaf left" src="/images/animation-1/fade-in-leaves-left.webp" ref={leavesLeft} />
      <img className="static-asset leaf-right" alt="leaf right" src="/images/animation-1/fade-in-leaves-right.webp" ref={leavesRight} />
    </div>
  );
}

export default AnimatePr1;
