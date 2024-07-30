/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import { Element } from 'react-scroll';
import './AiSection.scss';
import useElementOnScreen from '../../util/useElementOnScreen';
import AiChat from '../../components/aiChat/AiChat';
import AI_FAQ from '../../components/aiChat/FAQ/AI_FAQ';

function AiSection() {
  const [isImgVisible, setIsImgVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState('');
  function handleFAQ(e) {
    setActiveFAQ(e.target.name);
  }

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
            Want to learn more about me?
            {' '}
            <br />
            {' '}
            Ask away!
            <div className={`header-underline ${isVisible ? 'show-element-right' : 'hide-element-right'}`} />
          </h1>
          <div className="ai-section-hero-text">
            <p>Enter your question and the AI companion will try his best to give you a satisfactory answer!</p>
            <p>
              Not sure what to ask?
            </p>
            <div className="questions-container">
              <AI_FAQ
                question="What is your tech stack?"
                onClick={(e) => handleFAQ(e)}
              />
              <AI_FAQ
                question="What practical experience do you have?"
                onClick={(e) => handleFAQ(e)}
              />
              <AI_FAQ
                question="What is your academic background?"
                onClick={(e) => handleFAQ(e)}
              />
              <AI_FAQ
                question="In which way can we do business?"
                onClick={(e) => handleFAQ(e)}
              />
              <AI_FAQ
                question="Test question 5"
                onClick={(e) => handleFAQ(e)}
              />
              <AI_FAQ
                question="Test question 6"
                onClick={(e) => handleFAQ(e)}
              />
            </div>
          </div>
        </div>
        <div className="ai-right">
          {/* <div className="border-div" /> */}
          <AiChat
            triggerFAQ={activeFAQ}
          />
        </div>
      </section>
    </Element>
  );
}

export default AiSection;
