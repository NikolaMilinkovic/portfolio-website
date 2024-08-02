import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from '../../components/navbar/Navbar';
import Project from '../../components/project-display/Project';
import SocialsSidebar from '../../components/socials/SocialsSidebar';
import Footer from '../../components/footer/Footer';
import ScrollDownIcon from '../../components/scrollDownIcon/ScrollDownIcon';
import BirdGif from '../../components/birdGif/BirdGif';
import TechBox from '../../components/project-display/card/techBox/TechBox';
import useImageLoader from '../../util/useImageLoader';
import Loading from '../../components/loading/Loading';

import DisplayText from '../../components/textDisplay/text/DisplayText';
import './ProjectPage.scss';

// Display components
import DisplayHeader from '../../components/textDisplay/header/DisplayHeader';

function ProjectPage({ projectUrl }) {
  const [data, setData] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const loading = useImageLoader();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fetch data with projectUrl
  useEffect(() => {
    async function getData() {
      const response = await fetch(projectUrl);
      const projectData = await response.json();
      setData(projectData);
    }
    if (projectUrl) {
      getData();
    }
  }, [projectUrl]);

  return (
    <main className="case-study-page">
      {/* <Navbar /> */}
      <Loading
        isLoading={loading}
      />
      <section className="project-section">
        <div className="social-sidebar-container">
          <SocialsSidebar />
        </div>

        {data && (
          <section className="project">
            <Project
              projectData={data || null}
              // cardButtonPath="http://localhost:5173/case-study/battleship"
              projectDescritpionColor="black"
              timeout={0}
              mTop="0%"
              mBottom="0%"
              headerColor="black"
              customHeader="Case Study"
              type={2}
            />
          </section>
        )}
        {/* <svg className="path-container" width="100%" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D9EAC0" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
        <svg className="path-container-2" width="100%" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D9EAC0" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg> */}

        {/* Birds */}
        {/* { screenWidth && (
        <>
          <BirdGif
            id="bird-1"
            initialTop={50}
            left="-2"
            moveSpeed={screenWidth / 50}
          />
          <BirdGif
            id="bird-2"
            initialTop={65}
            left="-44"
            moveSpeed={screenWidth / 60}
          />
          <BirdGif
            id="bird-3"
            initialTop={48}
            left="-50"
            moveSpeed={screenWidth / 55}
          />
          <BirdGif
            id="bird-4"
            initialTop={46}
            left="-40"
            moveSpeed={screenWidth / 45}
          />
          <BirdGif
            id="bird-5"
            initialTop={70}
            left="-7"
            moveSpeed={screenWidth / 50}
          />
        </>
        )} */}
      </section>
      <section className="case-study-section">
        <div className="case-content">
          {data && (
          <>
            <DisplayHeader
              data="Project Context"
              hSize="h2"
            />
            <DisplayText
              textData={data.caseStudyData.projectContext}
            />
            <DisplayHeader
              data="Challenges & Objectives"
              hSize="h2"
            />
            <DisplayText
              textData={data.caseStudyData.challengesAndObjectives}
            />
            <DisplayHeader
              data="Achieved solution"
              hSize="h2"
            />
            <DisplayText
              textData={data.caseStudyData.achievedSolution}
            />
            <h3>Tech used</h3>
            <div className="tech-used">
              {data && data.caseStudyData.usedTechInDepth.map((tech, index) => (
                <TechBox text={tech} tech={tech} color="black" key={`tech-${index}`} />
              ))}
            </div>
            <br />
            <DisplayHeader
              data="Conclusion"
              hSize="h2"
            />
            <DisplayText
              textData={data.caseStudyData.conclusion}
            />
            <h3>Project Links:</h3>
            <div className="links">
              <a className="project-link" href={data.demoLink} target="_blank">
                Live Link
                <img className="project-icon" alt="Demo" src="/icons/black/desktop-solid.svg" />
              </a>
              <a className="project-link" href={data.gitLink} target="_blank">
                Code
                <img className="project-icon" alt="GitHub" src="/icons/black/code-solid.svg" />
              </a>
            </div>
          </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default ProjectPage;
