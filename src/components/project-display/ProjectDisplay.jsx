import React from 'react';
import './ProjectDisplay.scss';

function ProjectDisplay({ imageUrl }) {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100dvh',
    width: '100dvw',
    overflow: 'hidden',
  };

  return (
    <article style={backgroundStyle} className="project-display-article">
      {/* <p>Here I am displaying my project</p> */}
    </article>
  );
}

export default ProjectDisplay;
