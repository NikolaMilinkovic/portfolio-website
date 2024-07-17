import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
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

  useEffect(() => {
    console.log(window.location.href);
  }, []);

  return (
    <>
      <Navbar />
      <div>{projectUrl && (projectUrl)}</div>
      <div>{data && (data.name)}</div>
      <div>{data && (data.text)}</div>
      <div>{data && (data.images)}</div>
      <div>ProjectPage</div>
    </>
  );
}

export default ProjectPage;
