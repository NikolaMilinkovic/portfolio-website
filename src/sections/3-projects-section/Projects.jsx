/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import OtherProjectsCarousel from '../../components/project-display/other-projects-carousel/OtherProjectsCarousel';
import Project from '../../components/project-display/Project';
import './Projects.scss';

import AnimatePr1 from './project-1/AnimatePr1';

function Projects() {
  const [battleship, setBattleship] = useState(null);
  const [mcSchemMan, setMcSchemMan] = useState(null);
  const [cliDatStruct, setCliDatStruct] = useState(null);
  const [portfolioWebsite, setPortfolioWebsite] = useState(null);
  const [otherProjects, setOtherProjects] = useState([]);
  const navigate = useNavigate();

  // Fetch data
  useEffect(() => {
    async function getData() {
      const res_1 = await fetch('/files/projects/battleship.json');
      const batlleshipData = await res_1.json();
      setBattleship(batlleshipData);

      const res_2 = await fetch('/files/projects/mc-schematic-manager.json');
      const mcSchemManData = await res_2.json();
      setMcSchemMan(mcSchemManData);

      const res_3 = await fetch('/files/projects/cli-data-structures.json');
      const cliDataStrucData = await res_3.json();
      setCliDatStruct(cliDataStrucData);

      const res_4 = await fetch('/files/projects/portfolio-website.json');
      const portWebsite = await res_4.json();
      setPortfolioWebsite(portWebsite);

      // Other Projects
      const res_5 = await fetch('/files/secondaryProjects/cv-builder.json');
      const cvBuilder = await res_5.json();

      const res_6 = await fetch('/files/secondaryProjects/knight-travails.json');
      const knightTravails = await res_6.json();

      const res_7 = await fetch('/files/secondaryProjects/calculator.json');
      const calculator = await res_7.json();

      const res_8 = await fetch('/files/secondaryProjects/tiny-message-board.json');
      const tinyMessageBoard = await res_8.json();

      const res_9 = await fetch('/files/secondaryProjects/odin-registration-form.json');
      const odinRegistrationForm = await res_9.json();

      const res_10 = await fetch('/files/secondaryProjects/wp-form-mockup.json');
      const wpFormMockup = await res_10.json();

      setOtherProjects([cvBuilder, knightTravails, calculator, tinyMessageBoard, odinRegistrationForm, wpFormMockup]);
    }
    getData();
  }, []);

  return (
    <>
      <Element id="scroll-projects-1" name="scroll-projects-1">
        <section className="projects-section-1">
          <div className="scene-container">
            <AnimatePr1 />
          </div>
          <Project
            projectData={mcSchemMan || null}
            cardButtonPath="http://localhost:5173/case-study/mc-schematic-manager"
            headerColor="f5f5f5"
            cardButtonBackground="white"
            cardButtonColor="black"
            projectDescritpionColor="black"
            animateSide="right"
            arrowColor="#000000"
            timeout={1500}
          />
        </section>
      </Element>
      <Element id="scroll-projects-2" name="scroll-projects-2">
        <section className="projects-section-2">
          <Project
            projectData={battleship || null}
            cardButtonPath="http://localhost:5173/case-study/battleship"
            cardButtonBackground="black"
            cardButtonColor="white"
            projectDescritpionColor="white"
            arrowColor="#ffffff"
          />
        </section>
      </Element>
      <Element id="scroll-projects-3" name="scroll-projects-3">
        <section className="projects-section-3">
          <Project
            projectData={cliDatStruct || null}
            cardButtonPath="http://localhost:5173/case-study/cli-data-structures"
            cardButtonBackground="white"
            cardButtonColor="black"
            projectDescritpionColor="black"
            animateSide="right"
            arrowColor="#000000"
          />
        </section>
      </Element>
      <Element id="scroll-projects-4" name="scroll-projects-4">
        <section className="projects-section-2">
          <Project
            projectData={portfolioWebsite || null}
            cardButtonPath="http://localhost:5173/case-study/portfolio-website"
            cardButtonBackground="black"
            cardButtonColor="white"
            projectDescritpionColor="white"
            arrowColor="#ffffff"
          />
        </section>
      </Element>
      <Element id="scroll-projects-5" name="scroll-projects-5">
        <section className="projects-section-4">
          <header className="other-projects-header">
            <h1>Other Projects</h1>
          </header>
          <OtherProjectsCarousel
            projects={otherProjects || null}
          />
        </section>
      </Element>
    </>
  );
}

export default Projects;
