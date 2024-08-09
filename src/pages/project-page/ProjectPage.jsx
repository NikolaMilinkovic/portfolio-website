/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import Project from '../../components/project-display/Project';
import SocialsSidebar from '../../components/socials/SocialsSidebar';
import Footer from '../../components/footer/Footer';
import TechBox from '../../components/project-display/card/techBox/TechBox';
import useImageLoader from '../../util/useImageLoader';
import Loading from '../../components/loading/Loading';

import DisplayText from '../../components/textDisplay/text/DisplayText';
import './ProjectPage.scss';

// Display components
import DisplayHeader from '../../components/textDisplay/header/DisplayHeader';

function ProjectPage({ projectUrl }) {
  const [data, setData] = useState(null);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const loading = useImageLoader();

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="project-icon"
                    >
                      <path className="project-icon" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 288L64 352 64 64l448 0z" />
                    </svg>
                  </a>
                  )}
                  {data.gitLink && (
                  <a className="project-link" href={data.gitLink} target="_blank">
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="project-icon"
                    >
                      <path className="project-icon" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                    </svg>
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
