import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './NavButton.scss';

function NavButton({
  to, duration, name, text, updateNav, activeBtn, offset,
}) {
  const [active, setActive] = useState('false');
  useEffect(() => {
    activeBtn === name ? setActive(true) : setActive(false);
  }, [activeBtn, name]);

  return (
    <button name={name} type="button" onClick={(e) => updateNav(e)} className="nav-button">
      <Link offset={offset} onClick={(e) => updateNav(e)} name={name} className="scroll-link" to={to} smooth duration={duration}>{text}</Link>
      <div className={`nav-underline ${active ? 'btn-active' : 'btn-inactive'}`} />
    </button>
  );
}

export default NavButton;
