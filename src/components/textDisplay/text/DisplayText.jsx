/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import './DisplayText.scss';

function DisplayText({ textData }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log('Text data is:');
    console.log(textData);
    setData(textData);
  }, [textData]);

  useEffect(() => {
    console.log('Data is:');
    console.log(data);
  }, [data]);

  return (
    <>
      {data && data.map((obj, index) => (
        <div key={index}>
          <h3>{obj.title}</h3>
          {obj.text && obj.text.length > 0 && obj.text.map((text, textIndex) => (
            <p key={textIndex}>{text}</p>
          ))}
          {obj.bulletPoints && obj.bulletPoints.length > 0 && (
            <ul>
              {obj.bulletPoints.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}

export default DisplayText;
