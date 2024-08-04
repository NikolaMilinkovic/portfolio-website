/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import { Element } from 'react-scroll';
import './ProjectsHeader.scss';

function ProjectsHeader() {
  return (
    <Element id="projects" name="projects">
      <header className="project-header-section">
        <h1 className="header">Projects:</h1>
      </header>
    </Element>

  );
}

export default ProjectsHeader;
