import React from 'react';
import { Element } from 'react-scroll';
import './Projects.scss';
import ProjectDisplay from '../../components/project-display/ProjectDisplay';

function Projects() {
  return (
    <Element id="scroll-projects" name="scroll-projects">

      <section className="projects-section">
        <ProjectDisplay />
        {/* imageUrl="public/images/battleship-landing.png" */}
      </section>
      <section className="projects-section">
        <ProjectDisplay />
        {/* imageUrl="public/images/mc-schematic-manager-login.png" */}
      </section>
      <section className="projects-section">
        <ProjectDisplay />
        {/* imageUrl="public/images/cli-data-structures.png" */}
      </section>
    </Element>
  );
}

export default Projects;
