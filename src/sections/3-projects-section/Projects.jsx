import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import ProjectCarousel from '../../components/project-display/carousel/ProjectCarousel';
import './Projects.scss';

function Projects() {
  return (
    <Element id="scroll-projects" name="scroll-projects">
      {/* <img
        loading="lazy"
        srcSet="
          /images/1.png 480w,
          /images/5.png 768w,
          /images/4.png 834w,
          /images/3.png 1024w,
          /images/2.png 1440w,
        "
        src="/images/1.png"
        alt="Description of the"
      /> */}

      <section className="projects-section-1">
        <ProjectCarousel
          filePath="/files/projects/battleship.json"
        />
        <div className="test">
          <p>test</p>
        </div>
      </section>
      <section className="projects-section-2">
        <ProjectCarousel
          filePath="/files/projects/battleship.json"
        />
      </section>
      <section className="projects-section-3">
        <ProjectCarousel
          filePath="/files/projects/battleship.json"
        />
      </section>
    </Element>
  );
}

export default Projects;
