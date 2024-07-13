import React from 'react';
import './SocialsSidebar.scss';

function SocialsSidebar() {
  return (
    <aside className="socials-sidebar">
      <a className="sidebar-icon-link" href="https://www.linkedin.com/in/nikola-milinkovic-2231451a6/" target="_blank">
        <img className="sidebar-icon" alt="LinkedIn" src="/icons/black/linkedin.svg" />
      </a>
      <a className="sidebar-icon-link" href="https://github.com/NikolaMilinkovic" target="_blank">
        <img className="sidebar-icon" alt="GitHub" src="/icons/black/square-github.svg" />
      </a>
      <a className="sidebar-icon-link" href="https://www.instagram.com/nikola__milinkovic/" target="_blank">
        <img className="sidebar-icon" alt="Instagram" src="/icons/black/square-instagram.svg" />
      </a>
    </aside>
  );
}

export default SocialsSidebar;
