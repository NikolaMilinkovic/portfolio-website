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

  const deer_couple = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Fade in scene
      containerRef.current.classList.add('fade-in');
    }
  }, [isVisible, containerRef]);
  return (
    <div ref={containerRef} className="scene-4">
      {/* <img className="static-asset deer-male deer-couple" alt="Deer male" src="/images/animation-4/deer-male.webp" ref={deer_couple} />
      <img className="static-asset deer-female deer-couple" alt="Deer female" src="/images/animation-4/deer-female.webp" ref={deer_couple} /> */}
    </div>
  );
}

export default AnimatePr4;
