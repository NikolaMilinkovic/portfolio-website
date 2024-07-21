import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Project from '../../components/project-display/Project';
import './ProjectPage.scss';

function ProjectPage({ projectUrl }) {
  const [data, setData] = useState(null);

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
    <>
      <Navbar />
      {data && (
        <section className="project-section">
          <Project
            projectData={data || null}
            cardButtonPath="http://localhost:5173/case-study/battleship"
            cardButtonBackground="white"
            cardButtonColor="black"
            projectDescritpionColor="white"
            arrowColor="#000000"
            showCaseStudyBtn={false}
          />
        </section>
      )}
      <div className="information-container">
        <div>{projectUrl && (projectUrl)}</div>
        <div>{data && (data.name)}</div>
        <div>{data && (data.text)}</div>
        <div>{data && (data.images)}</div>
        <div>ProjectPage</div>
      </div>
    </>
  );
}

export default ProjectPage;
