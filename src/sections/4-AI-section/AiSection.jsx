/* eslint-disable max-len */
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './AiSection.scss';
import useElementOnScreen from '../../util/useElementOnScreen';
import AiChat from '../../components/aiChat/AiChat';
import AI_FAQ from '../../components/aiChat/FAQ/AI_FAQ';

function AiSection() {
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
    <Element id="scroll-faq" name="scroll-faq">
      <section className="ai-section" ref={containerRef}>
        <div className={`ai-left ${isVisible ? 'show-element-left' : 'hide-element-left'}`}>
          <h1 className="about-header ">
            Want to learn more about me?
            {' '}
            <br />
            {' '}
            Ask away!
            <div className="header-underline" />
          </h1>
          <div className="ai-section-hero-text">
            <p>Please enter your question and the AI companion will try his best to give you a satisfactory answer!</p>
            <p>
              Not sure what to ask?
            </p>
            {/* // question, onClick, offset, name, to, duration, */}

            <div className="questions-container">
              <AI_FAQ
                question="What practical experience do you have?"
                onClick={(e) => handleFAQ(e)}
                offset={-80}
                name="chat-window"
                to="chat-window"
                duration={600}
              />
              <AI_FAQ
                question="What is your academic background?"
                onClick={(e) => handleFAQ(e)}
                offset={-80}
                name="chat-window"
                to="chat-window"
                duration={600}
              />
              <AI_FAQ
                question="What is your tech stack?"
                onClick={(e) => handleFAQ(e)}
                offset={-80}
                name="chat-window"
                to="chat-window"
                duration={600}
              />
              <AI_FAQ
                question="In which way can we do business?"
                onClick={(e) => handleFAQ(e)}
                offset={-80}
                name="chat-window"
                to="chat-window"
                duration={600}
              />
              {/* <AI_FAQ
                question="Test question 5"
                onClick={(e) => handleFAQ(e)}
                offset={-80}
                name="chat-window"
                to="chat-window"
                duration={600}
              />
              <AI_FAQ
                question="Test question 6"
                onClick={(e) => handleFAQ(e)}
                offset={-80}
                name="chat-window"
                to="chat-window"
                duration={600}
              /> */}
            </div>
          </div>
        </div>
        <Element id="chat-window" name="chat-window">
          <div className={`ai-right  ${isVisible ? 'show-element-right' : 'hide-element-right'}`}>
            {/* <div className="border-div" /> */}
            <AiChat
              triggerFAQ={activeFAQ}
            />
          </div>
        </Element>
      </section>
    </Element>
  );
}

export default AiSection;
