/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import useElementOnScreen from '../../../util/useElementOnScreen';
import './AnimatePr4.scss';

function AnimatePr4() {
  const [isVisible, setIsVisible] = useState(false);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }, isVisible, setIsVisible, true);

  const raccoon = useRef(null);
  const leaves = useRef(null);
  const raccoonAnimated = useRef(null);
  const rock = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Fade in scene
      containerRef.current.classList.add('fade-in');
    }
  }, [isVisible, containerRef]);
  return (
    <div ref={containerRef} className="scene-4">
      <img className="static-asset raccoon" alt="raccoon" src="/images/animation-4/raccoon.png" ref={raccoon} />
      <img className="static-asset raccoon-animated" alt="raccoon" src="/images/animation-4/raccoon-animated-stare.gif" ref={raccoonAnimated} />
      {/* <img className="static-asset raccoon-animated" alt="raccoon" src="/images/animation-4/raccoon-extended.gif" ref={raccoonAnimated} /> */}
      <img className="static-asset leaves" alt="leaves" src="/images/animation-4/leaves.gif" ref={leaves} />
      <img className="static-asset rock" alt="leaves" src="/images/animation-4/rock-0.svg" ref={rock} />
    </div>
  );
}

export default AnimatePr4;
