/* eslint-disable max-len */
import React from 'react';
import { Element } from 'react-scroll';
import './AiSection.scss';
import ContactForm from '../../components/contactForm/ContactForm';

function AiSection() {
  return (
    <Element id="scroll-ai" name="scroll-ai">
      <section className="ai-section">
        <div className="info-area">
          <h1>Ask AI!</h1>
          <p>Looking to find out more about me? Ask away! The AI companion will try his best to give you all the information that you need.</p>
        </div>
        <div className="chat-section">
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
