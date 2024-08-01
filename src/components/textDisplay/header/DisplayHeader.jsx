import React from 'react';
import './DisplayHeader.scss';

function DisplayHeader({ data, hSize }) {
  return (

    <header className="display-header">
      <div className="text-container">
        {hSize === 'h1' && (<h1>{data}</h1>)}
        {hSize === 'h2' && (<h2>{data}</h2>)}
        {hSize === 'h3' && (<h3>{data}</h3>)}
        {hSize === 'h4' && (<h4>{data}</h4>)}
      </div>
      <div className="display-header-underline" />
    </header>
  );
}

export default DisplayHeader;
