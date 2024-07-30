import React from 'react';
import './AI_FAQ.scss';

function AI_FAQ({ question, onClick }) {
  return (
    <button type="button" className="faq-btn" onClick={onClick} name={question}>
      ➤
      {' '}
      {question}
    </button>
  );
}

export default AI_FAQ;
