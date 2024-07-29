import React, { useState, useEffect } from 'react';
import './OnClickCopy.scss';

function OnClickCopy({ string }) {
  const [data, setData] = useState('');
  useEffect(() => {
    setData(string);
  }, [string]);
  function copyToClipboard() {
    navigator.clipboard.writeText('nikolamilinkovic221@gmail.com');
    setData('Copied to clipboard!');
    setTimeout(() => {
      setData(string);
    }, 1200);
  }
  return (
    <button type="button" onClick={copyToClipboard} className="copy-btn">
      { data }
    </button>
  );
}

export default OnClickCopy;
