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
      </section>
      <section className="case-study-section">
        <div className="case-content">
          {data && (
          <>
            {/* Project Context Section */}
            {data.caseStudyData.projectContext && (
              <DisplayHeader
                data="Project Context"
                hSize="h2"
              />
            )}
            <DisplayText
              textData={data.caseStudyData.projectContext}
            />

            {/* Challenged & Objectives Section */}
            {data.caseStudyData.challengesAndObjectives && (
              <DisplayHeader
                data="Challenges & Objectives"
                hSize="h2"
              />
            )}
            <DisplayText
              textData={data.caseStudyData.challengesAndObjectives}
            />

            {/* Achieved Solution Section */}
            {data.caseStudyData.achievedSolution && (
              <DisplayHeader
                data="Achieved solution"
                hSize="h2"
              />
            )}
            <DisplayText
              textData={data.caseStudyData.achievedSolution}
            />

            {/* Tech Used Section */}
            {data.caseStudyData.usedTechInDepth && (
              <>
                <h3>Tech used</h3>
                <div className="tech-used">
                  {data && data.caseStudyData.usedTechInDepth.map((tech, index) => (
                    <TechBox text={tech} tech={tech} color="black" key={`tech-${index}`} />
                  ))}
                </div>
                <br />
              </>
            )}

            {/* Conclustion Section */}
            {data.caseStudyData.conclusion && (
              <DisplayHeader
                data="Conclusion"
                hSize="h2"
              />
            )}
            <DisplayText
              textData={data.caseStudyData.conclusion}
            />

            {/* Project Links Section */}
            {(data.demoLink || data.gitLink) && (
              <>
                <h3>Project Links:</h3>
                <div className="links">
                  {data.demoLink && (
                  <a className="project-link" href={data.demoLink} target="_blank">
                    Live Link
                    <img className="project-icon" alt="Demo" src="/icons/black/desktop-solid.svg" />
                  </a>
                  )}
                  {data.gitLink && (
                  <a className="project-link" href={data.gitLink} target="_blank">
                    Code
                    <img className="project-icon" alt="GitHub" src="/icons/black/code-solid.svg" />
                  </a>
                  )}
                </div>
              </>
            )}

          </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default ProjectPage;
