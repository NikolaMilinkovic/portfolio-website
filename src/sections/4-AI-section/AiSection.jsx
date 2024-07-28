/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import { Element } from 'react-scroll';
import './AiSection.scss';
import ContactForm from '../../components/contactForm/ContactForm';
import useElementOnScreen from '../../util/useElementOnScreen';

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
            Ask AI all you want to know about me!
            <div className={`header-underline ${isVisible ? 'show-element-right' : 'hide-element-right'}`} />
          </h1>
          <div className="ai-section-hero-text">
            <p>Looking to find out more about me? Ask away! The AI companion will try his best to give you all the information that you need.</p>
          </div>
        </div>
        <div className="ai-right">
          {/* <div className="chat-display">
            <p>This is the chat section</p>
          </div>
          <div className="input-section">
            <p>This is the input section</p>
          </div> */}
        </div>
      </section>
    </Element>
  );
}

export default AiSection;
