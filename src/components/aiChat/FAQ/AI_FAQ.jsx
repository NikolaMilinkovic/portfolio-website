import React from 'react';
import { Link } from 'react-scroll';
import './AI_FAQ.scss';

function AI_FAQ({
  question, onClick, offset, to, duration,
}) {
  return (
    <button type="button" className="faq-btn" onClick={onClick} name={question}>
      <Link offset={offset} name={question} onClick={onClick} className="faq-scroll-link" to={to} smooth duration={duration}>
        {' '}
        ➤
        {' '}
        {question}
      </Link>

    </button>
  );
}

export default AI_FAQ;
