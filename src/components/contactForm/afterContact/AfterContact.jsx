/* eslint-disable max-len */
import './AfterContact.scss';
import React, { useEffect, useRef } from 'react';
import DisplayWebm from '../../../util/DisplayWebm';
import OnClickCopy from './onClickCopy/OnClickCopy';

function AfterContact({ isActive, toggleForm }) {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    if (!isActive) {
      setTimeout(() => {
        headerRef.current.classList.add('move-header');
      }, 1200);
      setTimeout(() => {
        textRef.current.classList.add('display-text');
      }, 1800);
    }
  }, [isActive]);
  function toggleAnimation() {
    toggleForm();
    headerRef.current.classList.remove('move-header');
    textRef.current.classList.remove('display-text');
  }

  return (
    <div className="after-contact-container">
      <div className="content">
        {/* move-header */}
        <header className="header" ref={headerRef}>
          <h1 className="success-header">Success!</h1>
          <div className="success-icon ">
            <DisplayWebm
              height="90px"
              width="90px"
              path="/files/webm/success-animation.webm"
            />
          </div>
        </header>
        {/* display-text */}
        <div className="text-wrapper" ref={textRef}>
          <p>Thank you for contacting me! I usually respond in the next 48 hours.</p>
          <button type="button" onClick={toggleAnimation} className="send-another-message">Send another message?</button>
          <p>Feel free to check out my socials for another way of reaching out!</p>
          <div className="socials">
            <a className="socials-icon-link" href="https://www.linkedin.com/in/nikola-milinkovic-2231451a6/" target="_blank">
              <img className="icon" alt="LinkedIn" src="/icons/colored/linkedin.png" />
            </a>
            <a className="socials-icon-link" href="https://github.com/NikolaMilinkovic" target="_blank">
              <img className="icon" alt="GitHub" src="/icons/black/github-sign.png" />
            </a>
            <a className="socials-icon-link" href="https://www.instagram.com/nikola__milinkovic/" target="_blank">
              <img className="icon" alt="Instagram" src="/icons/colored/instagram.png" />
            </a>
          </div>

          <p>
            Or contact me via email at
          </p>
          <OnClickCopy
            string="nikolamilinkovic221@gmail.com"
          />
        </div>

      </div>
    </div>
  );
}

export default AfterContact;
