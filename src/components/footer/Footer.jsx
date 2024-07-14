import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="upper-section">
        <div className="left">
          <div>
            <p className="footer-header">Nikola Milinkovic</p>
            <p className="footer-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis itaque vero est rem provident dignissimos.</p>
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
          © Copyright 2024. Made by&nbsp;
          <a href="https://github.com/NikolaMilinkovic/portfolio-website" target="_blank">Nikola Milinkovic</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
