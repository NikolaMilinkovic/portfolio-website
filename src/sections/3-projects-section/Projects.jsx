import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import ProjectCarousel from '../../components/project-display/carousel/ProjectCarousel';
import ProjectDescription from '../../components/project-display/card/ProjectDescription';
import CardButton from '../../components/project-display/card/cardButton/CardButton';
import './Projects.scss';

function Projects() {
  const [battleship, setBattleship] = useState(null);
  const [mcSchemMan, setMcSchemMan] = useState(null);
  const [cliDatStrut, setCliDatStrut] = useState(null);
  const navigate = useNavigate();
  // Fetch data
  useEffect(() => {
    async function getData() {
      const response = await fetch('/files/projects/battleship.json');
      const projectData = await response.json();
      setBattleship(projectData);
    }
    getData();
  }, []);
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

      {/* BATTLESHIP */}
      <section className="projects-section-1">
        <div className="project-description-background">

          {/* HEADER */}
          <header className="header">
            {battleship && (battleship.name)}
          </header>
          <div className="buttons-container">
            <CardButton
              path="http://localhost:5173/case-study/battleship"
              text="Case Study"
              // background={background}
              // color={color}
            />
            {battleship && (
            <>
              <CardButton
                path={battleship.demoLink}
                text="Live Demo"
                // background={background}
                // color={color}
              />
              <CardButton
                path={battleship.gitLink}
                text="Code"
                // background={background}
                // color={color}
              />
            </>
            )}
          </div>
          {/* Carousel */}
          {battleship && (
            <ProjectCarousel
              images={battleship.images}
            />
          )}

          {/* Project Description */}
          {battleship && (
            <ProjectDescription
              projectData={battleship}
              color="black"
            />
          )}
        </div>
      </section>

      <section className="projects-section-2">
        <div className="project-description-background">

          {/* HEADER */}
          <header className="header">
            {battleship && (battleship.name)}
          </header>
          <div className="buttons-container">
            <CardButton
              path="http://localhost:5173/case-study/battleship"
              text="Case Study"
              background="black"
              color="white"
            />
            {battleship && (
            <>
              <CardButton
                path={battleship.demoLink}
                text="Live Demo"
                background="black"
                color="white"
              />
              <CardButton
                path={battleship.gitLink}
                text="Code"
                background="black"
                color="white"
              />
            </>
            )}
          </div>

          {/* Carousel */}
          {battleship && (
          <ProjectCarousel
            images={battleship.images}
          />
          )}

          {/* Project Description */}
          {battleship && (
          <ProjectDescription
            projectData={battleship}
            color="white"
          />
          )}
        </div>
      </section>
      <section className="projects-section-3">
        <div className="project-description-background">

          {/* HEADER */}
          <header className="header">
            {battleship && (battleship.name)}
          </header>
          <div className="buttons-container">
            <CardButton
              path="http://localhost:5173/case-study/battleship"
              text="Case Study"
            />
            {battleship && (
            <>
              <CardButton
                path={battleship.demoLink}
                text="Live Demo"
              />
              <CardButton
                path={battleship.gitLink}
                text="Code"
              />
            </>
            )}
          </div>
          {/* Carousel */}
          {battleship && (
          <ProjectCarousel
            images={battleship.images}
          />
          )}

          {/* Project Description */}
          {battleship && (
          <ProjectDescription
            projectData={battleship}
            color="black"
          />
          )}
        </div>
      </section>
    </Element>
  );
}

export default Projects;
