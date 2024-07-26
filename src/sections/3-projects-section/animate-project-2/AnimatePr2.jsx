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
  const leavesRight = useRef(null);
  const leavesLeft = useRef(null);

  // Wolves ref
  const wolf_0 = useRef(null);
  const wolf_1 = useRef(null);

  // Bird ref
  const bird_0 = useRef(null);
  const bird_1 = useRef(null);

  // Boat ref
  const boat = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Fade in leaves
      // leavesRight.current.classList.add('leaf-right-fade-out');
      // leavesLeft.current.classList.add('leaf-left-fade-out');
      // containerRef.current.classList.add('scene-fade-in');

      // bird_0.current.classList.add('bird-0-move');
      // shrub_1.current.classList.add('shrub-1-move');
      // shrub_2.current.classList.add('shrub-2-move');

      // WOLVES
      // setTimeout(() => {
      //   wolf_0.current.classList.add('move-wolf');
      //   wolf_1.current.classList.add('move-wolf');
      // }, 500);
    }
  }, [isVisible, containerRef]);
  return (
    <div ref={containerRef} className="scene">
      {/* <img className="static-asset bird-0" alt="bird" src="/images/animation-2/bird0w.gif" ref={bird_0} /> */}
      <img className="static-asset cane-right" alt="bird" src="/images/animation-2/cane-right.webp" />
      <img className="static-asset cane-right-2" alt="bird" src="/images/animation-2/cane-right.webp" />
      <img className="static-asset cane-right-small" alt="bird" src="/images/animation-2/cane-small.webp" />
      {/* <img className="static-asset cane-left" alt="bird" src="/images/animation-2/cane-right.webp" /> */}
      {/* <img className="static-asset test" alt="bird" src="/images/animation-2/fisherman.webp" /> */}
      <img className="static-asset bird-right" alt="bird" src="/images/animation-2/bird1w.gif" />
    </div>
  );
}

export default AnimatePr2;
