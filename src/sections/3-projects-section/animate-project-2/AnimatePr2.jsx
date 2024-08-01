/* eslint-disable camelcase */
import React, { useState, useEffect, useRef } from 'react';
import './AnimatePr2.scss';
import useElementOnScreen from '../../../util/useElementOnScreen';

function AnimatePr2() {
  const [isVisible, setIsVisible] = useState(false);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }, isVisible, setIsVisible, true);

  // Fade in leaves
  const cane_0 = useRef(null);
  const cane_1 = useRef(null);
  const cane_2 = useRef(null);
  const bird = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Fade in leaves
      containerRef.current.classList.add('fade-in');
    }
  }, [isVisible, containerRef]);
  return (
    <div ref={containerRef} className="scene-2">
      {/* <img className="static-asset bird-0" alt="bird" src="/images/animation-2/bird0w.gif" ref={bird_0} /> */}
      <img className="static-asset cane-right" ref={cane_0} alt="cane" src="/images/animation-2/cane-right.webp" />
      <img className="static-asset cane-right-2" ref={cane_1} alt="cane" src="/images/animation-2/cane-right.webp" />
      <img className="static-asset cane-right-small" ref={cane_2} alt="cane" src="/images/animation-2/cane-small.webp" />
      {/* <img className="static-asset cane-left" alt="bird" src="/images/animation-2/cane-right.webp" /> */}
      {/* <img className="static-asset test" alt="bird" src="/images/animation-2/fisherman.webp" /> */}
      <img
        className="static-asset bird-right"
        ref={bird}
        alt="bird"
        srcSet="/images/animation-2/bird-mobile.gif 799w, /images/animation-2/bird1w.gif 800w"
        sizes="(max-width: 799px) 100vw,
               (min-width: 800px) 100vw"
        src="/images/animation-1/bird1w.gif"
      />
    </div>
  );
}

export default AnimatePr2;
