/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import { Element } from 'react-scroll';
import './AiSection.scss';
import useElementOnScreen from '../../util/useElementOnScreen';
import AiChat from '../../components/aiChat/AiChat';

function AiSection() {
  const [isImgVisible, setIsImgVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }, isVisible, setIsVisible, true);
  return (
    <Element id="scroll-ai" name="scroll-ai">
      <section className="ai-section" ref={containerRef}>
        <div className="ai-left">
          <h1 className={`about-header ${isVisible ? 'show-element-right' : 'hide-element-right'}`}>
            Wanna know more about me? Ask AI!
            <div className={`header-underline ${isVisible ? 'show-element-right' : 'hide-element-right'}`} />
          </h1>
          <div className="ai-section-hero-text">
            <p>Enter your question and the AI companion will try his best to give you a satisfactory answer!</p>
            <p>
              Not sure what to ask?
            </p>
            <div className="questions-container">
              <button type="button">Question 1</button>
              <button type="button">Question 2</button>
              <button type="button">Question 3</button>
              <button type="button">Question 4</button>
              <button type="button">Question 5</button>
              <button type="button">Question 6</button>
            </div>
          </div>
        </div>
        <div className="ai-right">
          <div className="border-div" />
          <AiChat />
        </div>
      </section>
    </Element>
  );
}

export default AiSection;
