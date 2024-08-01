import React, { useEffect, useState } from 'react';
import './ProjectSidebar.scss';

function ProjectSidebar({ projectData, caseStudyLink = '', color = 'black' }) {
  const [data, setData] = useState(projectData || null);
  const [caseStudy, setCaseStudy] = useState(caseStudyLink || null);
  useEffect(() => {
    setCaseStudy(caseStudyLink);
  }, [caseStudyLink]);
  useEffect(() => {
    setData(projectData);
  }, [projectData]);
  return (
    <aside className="project-sidebar">
      {data && (
        <>
          <a className="sidebar-icon-link link-demo" href={data.demoLink} target="_blank" style={{ color }}>
            <img className="sidebar-icon" alt="Demo" src="/icons/black/desktop-solid.svg" />
            <div className="slider slide-demo">
              <p>Live Demo</p>
            </div>
          </a>

          <a className="sidebar-icon-link link-git" href={data.gitLink} target="_blank" style={{ color }}>
            <img className="sidebar-icon" alt="GitHub" src="/icons/black/code-solid.svg" />
            <div className="slider slide-git">
              <p>Git Hub Repo</p>
            </div>
          </a>
          {caseStudy && (
          <a className="sidebar-icon-link link-case-study" href={caseStudy} target="_blank" style={{ color }}>
            <img className="sidebar-icon" alt="Case study" src="/icons/black/circle-info-solid.svg" />
            <div className="slider slide-case-study">
              <p>Case Study</p>
            </div>
          </a>
          )}
        </>
      )}
    </aside>
  );
}

export default ProjectSidebar;
