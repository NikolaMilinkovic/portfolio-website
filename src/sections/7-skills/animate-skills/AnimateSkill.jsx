import React, { useState } from 'react';
import './AnimateSkills.scss';
import useElementOnScreen from '../../../util/useElementOnScreen';

function AnimateSkill() {
  const [isVisible, setIsVisible] = useState(true);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  }, isVisible, setIsVisible, true);
  return (
    <div ref={containerRef} className="skills-scene">
      {/* <img className="static-asset wolf" alt="Wolf" src="/images/skills/wolf-and-trees.webp" /> */}
      <img className="static-asset forest-white" alt="Wolf" src="/images/skills/1w.png" />
      <img className="static-asset bg" alt="Wolf" src="/images/skills/bg.png" />
      {/* <img className="static-asset forest-green" alt="Wolf" src="/images/skills/1g.png" /> */}
      {/* <img className="static-asset deer-male deer-couple" alt="Deer male" src="/images/animation-4/deer-male.webp" ref={deer_couple} />
      <img className="static-asset deer-female deer-couple" alt="Deer female" src="/images/animation-4/deer-female.webp" ref={deer_couple} /> */}
    </div>
  );
}

export default AnimateSkill;
