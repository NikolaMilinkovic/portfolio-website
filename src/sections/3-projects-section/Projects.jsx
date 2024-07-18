/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import OtherProjectsCarousel from '../../components/project-display/other-projects-carousel/OtherProjectsCarousel';
import Project from '../../components/project-display/Project';
import './Projects.scss';

function Projects() {
  const [battleship, setBattleship] = useState(null);
  const [mcSchemMan, setMcSchemMan] = useState(null);
  const [cliDatStruct, setCliDatStruct] = useState(null);
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

      // Other Projects
      const res_4 = await fetch('/files/secondaryProjects/cv-builder.json');
      const cvBuilder = await res_4.json();

      const res_5 = await fetch('/files/secondaryProjects/knight-travails.json');
      const knightTravails = await res_5.json();

      const res_6 = await fetch('/files/secondaryProjects/calculator.json');
      const calculator = await res_6.json();

      const res_7 = await fetch('/files/secondaryProjects/tiny-message-board.json');
      const tinyMessageBoard = await res_7.json();

      const res_8 = await fetch('/files/secondaryProjects/odin-registration-form.json');
      const odinRegistrationForm = await res_8.json();

      const res_9 = await fetch('/files/secondaryProjects/wp-form-mockup.json');
      const wpFormMockup = await res_9.json();

      setOtherProjects([cvBuilder, knightTravails, calculator, tinyMessageBoard, odinRegistrationForm, wpFormMockup]);
    }
    getData();
  }, []);

  return (
    <>
      <Element id="scroll-projects-1" name="scroll-projects-1">
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
          <Project
            projectData={mcSchemMan || null}
            cardButtonPath="http://localhost:5173/case-study/mc-schematic-manager"
            cardButtonBackground="white"
            cardButtonColor="black"
            projectDescritpionColor="black"
          />
        </section>
      </Element>
      <Element id="scroll-projects-2" name="scroll-projects-2">
        {/* "http://localhost:5173/case-study/battleship" */}
        <section className="projects-section-2">
          <Project
            projectData={battleship || null}
            cardButtonPath="http://localhost:5173/case-study/battleship"
            cardButtonBackground="black"
            cardButtonColor="white"
            projectDescritpionColor="white"
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
          />
        </section>
      </Element>
      <Element id="scroll-projects-4" name="scroll-projects-4">
        <section className="projects-section-4">
          <header className="other-projects-header">
            <h2>Other Projects</h2>
          </header>
          <OtherProjectsCarousel
            projects={otherProjects || null}
          />
          {/* <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestias asperiores qui pariatur, tempora blanditiis dicta? Facilis consequuntur minus quidem.
            </p>
          </article> */}
        </section>
      </Element>
    </>
  );
}

export default Projects;
