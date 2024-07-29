/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

function DisplayWebm({
  path = '',
  className = '',
  loop = false,
  muted = true,
  autoPlay = true,
  height = '120px',
  width = '120px',
}) {
  return (
    <video
      style={{ height, width }}
      className={className}
      src={path}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
    />
  );
}

export default DisplayWebm;
