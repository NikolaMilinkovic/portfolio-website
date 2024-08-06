/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import OtherProjectsCarousel from '../../components/project-display/other-projects-carousel/OtherProjectsCarousel';
import Project from '../../components/project-display/Project';
import ProjectSidebar from '../../components/project-display/project-sidebar/ProjectSidebar';
import './Projects.scss';

import AnimatePr1 from './animate-project-1/AnimatePr1';
import AnimatePr2 from './animate-project-2/AnimatePr2';
import AnimatePr3 from './animate-project-3/AnimatePr3';
import AnimatePr4 from './animate-project-4/AnimatePr4';
import OtherProjectsSwiper from '../../components/project-display/other-projects-carousel/swiper/OtherProjectsSwiper';

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
      {/* PROJECT 1 */}
      <Element id="scroll-mc-schematic-manager" name="scroll-mc-schematic-manager">
        <section className="projects-section-1">
          <ProjectSidebar
            projectData={mcSchemMan || null}
            caseStudyLink="/case-study/mc-schematic-manager"
          />
          <Project
            caseStudyLink="/case-study/mc-schematic-manager"
            projectData={mcSchemMan || null}
            projectDescritpionColor="black"
            animateSide="right"
            timeout={1000}
          />
          <div className="scene-container">
            <AnimatePr1 />
          </div>
          <div className="ground" />
          <div className="color-fill" />
          <svg className="path-container" width="100%" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D9EAC0" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          </svg>
          <svg className="path-container-2" width="100%" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D9EAC0" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          </svg>
        </section>
      </Element>

      {/* PROJECT 2 */}
      <Element id="scroll-battleship" name="scroll-battleship">
        <section className="projects-section-2">
          <ProjectSidebar
            projectData={battleship || null}
            caseStudyLink="/case-study/battleship"
            color="white"
          />
          <Project
            caseStudyLink="/case-study/battleship"
            projectData={battleship || null}
            projectDescritpionColor="white"
            headerColor="white"
            timeout={1000}
          />
          <div className="scene-container">
            <AnimatePr2 />
          </div>
        </section>
      </Element>

      {/* PROJECT 3 */}
      <Element id="scroll-cli-data-structures" name="scroll-cli-data-structures">
        <section className="projects-section-3">
          <div className="scene-container">
            <AnimatePr3 />
          </div>
          <ProjectSidebar
            projectData={cliDatStruct || null}
            caseStudyLink="/case-study/cli-data-structures"
          />
          <Project
            caseStudyLink="/case-study/cli-data-structures"
            projectData={cliDatStruct || null}
            projectDescritpionColor="black"
            timeout={1000}
          />
          <div className="ground" />
          <svg className="path-container" width="100%" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D9EAC0" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          </svg>
          <svg className="path-container-2" width="100%" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D9EAC0" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          </svg>
        </section>
      </Element>

      {/* PROJECT 4 */}
      <Element id="scroll-portfolio-website" name="scroll-portfolio-website">
        <section className="projects-section-4">
          <ProjectSidebar
            projectData={portfolioWebsite || null}
            caseStudyLink="/case-study/portfolio-website"
            color="white"
          />
          <Project
            caseStudyLink="/case-study/portfolio-website"
            projectData={portfolioWebsite || null}
            projectDescritpionColor="white"
            headerColor="white"
            timeout={1000}
          />
          <div className="scene-container">
            <AnimatePr4 />
          </div>

          {/* <div className="ground-white" /> */}
        </section>
      </Element>

      {/* OTHER PROJECTS */}
      <Element id="scroll-other-projects" name="scroll-other-projects">
        <section className="projects-section-5">
          <header className="other-projects-header">
            <h1>Other Projects</h1>
          </header>
          {/* <OtherProjectsCarousel
            projects={otherProjects || null}
          /> */}
          <OtherProjectsSwiper
            projects={otherProjects || null}
          />
        </section>
      </Element>
    </>
  );
}

export default Projects;
