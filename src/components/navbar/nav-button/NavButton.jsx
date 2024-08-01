import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './NavButton.scss';

const NavButton = React.memo(({
  to,
  duration,
  name,
  text,
  updateNav,
  activeBtn,
  offset,
  isDropdownBtn = [],
}) => {
  const [active, setActive] = useState(false); // Changed 'false' to false (boolean)

  useEffect(() => {
    if (isDropdownBtn.length > 0) {
      const isActive = isDropdownBtn.includes(activeBtn) || activeBtn === name;
      setActive(isActive);
    } else {
      setActive(activeBtn === name);
    }
  }, [activeBtn, name, isDropdownBtn]);

  return (
    <button name={name} type="button" onClick={(e) => updateNav(e)} className="nav-button">
      <Link offset={offset} onClick={(e) => updateNav(e)} name={name} className="scroll-link" to={to} smooth duration={duration}>
        {text}
      </Link>
      <div className={`nav-underline ${active ? 'btn-active' : 'btn-inactive'}`} />
    </button>
  );
});

export default NavButton;
