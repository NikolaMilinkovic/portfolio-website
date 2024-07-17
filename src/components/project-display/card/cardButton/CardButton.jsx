import React from 'react';
import './CardButton.scss';

function CardButton({
  path, text, color, background,
}) {
  return (
    <a className="link" href={path} target="_blank">
      <button
        className="button"
        type="button"
        style={{ color, borderColor: color, backgroundColor: background }}
      >
        {text}
      </button>
    </a>
  );
}

export default CardButton;
