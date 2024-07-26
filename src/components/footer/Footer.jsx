import React from 'react';
import './Footer.scss';
import BirdGif from '../birdGif/BirdGif';

function Footer() {
  return (
    <footer>
      <img src="/images/home/5.png" className="footer-image" alt="forest transition" />
      <img src="/images/home/4.png" className="footer-image" alt="forest transition" />
      <img src="/images/home/3.png" className="footer-image" alt="forest transition" />
      <img src="/images/home/2.png" className="footer-image" alt="forest transition" />
      <img src="/images/home/1.png" id="img-1" className="footer-image" alt="forest transition" />

      <div className="upper-section">
        <div className="left">
          <div>
            <p className="footer-header">Nikola Milinkovic</p>
            <p className="footer-text">Thank you for checking out my portfolio, lets get in touch and work towards creating something special!</p>
          </div>
        </div>

        <div className="right">
          <div className="footer-socials">
            <p className="socials-text">socials</p>
            <div>
              <a className="footer-socials-icon-link" href="https://www.linkedin.com/in/nikola-milinkovic-2231451a6/" target="_blank">
                <img className="footer-icon" alt="LinkedIn" src="/icons/white/linkedin-white.svg" />
              </a>
              <a className="footer-socials-icon-link" href="https://github.com/NikolaMilinkovic" target="_blank">
                <img className="footer-icon" alt="GitHub" src="/icons/white/square-github-white.svg" />
              </a>
              <a className="footer-socials-icon-link" href="https://www.instagram.com/nikola__milinkovic/" target="_blank">
                <img className="footer-icon" alt="Instagram" src="/icons/white/square-instagram-white.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <p className="copyright">
          © Copyright 2024.&nbsp;
          <a href="https://github.com/NikolaMilinkovic/" target="_blank">Nikola Milinkovic</a>
          &nbsp;all rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
