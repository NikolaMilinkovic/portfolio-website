import React from 'react';
import './CardButton.scss';

function CardButton({
  path, text, color, background,
}) {
  return (
    <a className="link" href={path} target="_blank">
      <button
        className="card-button"
        type="button"
        style={{ color, borderColor: color, backgroundColor: background }}
      >
        {text === 'Live' && (
          <img className="card-button-header-icon" alt="Demo" src="/icons/black/desktop-solid.svg" />
        )}
        {text === 'Code' && (
          <img className="card-button-header-icon" alt="Demo" src="/icons/black/code-solid.svg" />
        )}
      </button>
    </a>
  );
}

export default CardButton;

{ /* <a className="header-icon-link link-demo" href={data.demoLink} target="_blank">
<img className="header-icon" alt="Demo" src={headerColor === 'black' ? '/icons/black/desktop-solid.svg' : '/icons/white/desktop-solid-w.svg'} />
</a>
<a className="header-icon-link link-git" href={data.gitLink} target="_blank">
<img className="header-icon" alt="GitHub" src={headerColor === 'black' ? '/icons/black/code-solid.svg' : '/icons/white/code-solid-w.svg'} />
</a>
<a className="header-icon-link link-case-study" href={caseStudyLink} target="_blank">
<img className="header-icon" alt="Case study" src={headerColor === 'black' ? '/icons/black/circle-info-solid.svg' : '/icons/white/circle-info-solid-w.svg'} />
</a> */ }
