import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from '../../components/navbar/Navbar';
import Project from '../../components/project-display/Project';
import SocialsSidebar from '../../components/socials/SocialsSidebar';
import Footer from '../../components/footer/Footer';
import ScrollDownIcon from '../../components/scrollDownIcon/ScrollDownIcon';
import BirdGif from '../../components/birdGif/BirdGif';
import './ProjectPage.scss';

function ProjectPage({ projectUrl }) {
  const [data, setData] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <>
      <Navbar />
      <section className="project-section">
        <SocialsSidebar />

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
            />
          </section>
        )}
        <svg className="path-container" width="100%" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D9EAC0" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
        <svg className="path-container-2" width="100%" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D9EAC0" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>

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
          <p className="z-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt a unde aut temporibus rem enim quidem eaque non eos veniam aperiam, nobis voluptatibus architecto fugiat ducimus veritatis voluptatum recusandae amet vel ipsa vero dicta nulla! Eum impedit pariatur natus ab, iste rem deleniti magni odio ratione molestias sapiente cupiditate dolorum?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt a unde aut temporibus rem enim quidem eaque non eos veniam aperiam, nobis voluptatibus architecto fugiat ducimus veritatis voluptatum recusandae amet vel ipsa vero dicta nulla! Eum impedit pariatur natus ab, iste rem deleniti magni odio ratione molestias sapiente cupiditate dolorum?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt a unde aut temporibus rem enim quidem eaque non eos veniam aperiam, nobis voluptatibus architecto fugiat ducimus veritatis voluptatum recusandae amet vel ipsa vero dicta nulla! Eum impedit pariatur natus ab, iste rem deleniti magni odio ratione molestias sapiente cupiditate dolorum?</p>
        </div>
      </section>
      <div className="footer-wrapepr">
        <Footer />
      </div>
    </>
  );
}

export default ProjectPage;
