import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from '../../components/navbar/Navbar';
import Project from '../../components/project-display/Project';
import SocialsSidebar from '../../components/socials/SocialsSidebar';
import Footer from '../../components/footer/Footer';
import ScrollDownIcon from '../../components/scrollDownIcon/ScrollDownIcon';
import BirdGif from '../../components/birdGif/BirdGif';
import TechBox from '../../components/project-display/card/techBox/TechBox';
import './ProjectPage.scss';

// Display components
import DisplayHeader from '../../components/textDisplay/header/DisplayHeader';

function ProjectPage({ projectUrl }) {
  const [data, setData] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    }
    getData();
  }, []);

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
          <DisplayHeader
            data="Project Context"
            hSize="h2"
          />
          {/* <h1>Project Context</h1> */}
          <h3>Who is it for?</h3>
          <p>
            Minecraft Schematic Manager is designed for studios and individuals who specialize in creating Minecraft maps for both commercial and non-commercial purposes. This includes a diverse range of users, from professional game design studios to freelance builders and hobbyists.
          </p>
          <p>
            These creators often work on projects requiring intricate and detailed map designs with a large number of assets. The maps can be used for various purposes such as gaming servers, educational tools, and entertainment.
          </p>
          <br />
          <DisplayHeader
            data="Challenges & Objectives"
            hSize="h2"
          />
          <h3>Problem Overiew</h3>
          <p>In the dynamic world of Minecraft map creation, studios and individual builders face the challenge of managing numerous assets. Over the course of a year, a single studio or builder can produce dozens of maps and potentially hundreds of assets. Despite good organizational efforts, tracking these assets becomes increasingly difficult.</p>
          <p>Builders often struggle to maintain a clear inventory of their assets, leading to inefficiencies, missed opportunities for asset reuse, and delays in project timelines. The current process to import assets to the server is slow and inefficient, requiring builders to locate files, upload them to the FAWE schematics server, and manually copy and use returned commands.</p>
          <h3>Key objectives</h3>
          <ul>
            <li>Efficient asset storage and lookup method</li>
            <li>Cut time needed for asset upload</li>
            <li>Possibility of creating collections for better asset sorting</li>
            <li>Provide studios a way of generating new user accounts and ability to set their permissions</li>
            <li>Enhance work speed by keeping everything fast and simple</li>
          </ul>
          <br />
          <DisplayHeader
            data="Achieved solution"
            hSize="h2"
          />
          <h3>Core Features</h3>
          <ul>
            <li>JWT authentication and authorization method</li>
            <li>Fast File / Image upload via drag & drop or clipboard paste (ctrl+c / ctrl+v)</li>
            <li>Autocomplete suggestions based on previous entries</li>
            <li>Instant asset upload & paste command copied to clipboard via single button click</li>
            <li>Asset & Collections lookup via search input that uses names & tags to find suggestions</li>
            <li>Methods for adding / editing / removing an asset or collection</li>
            <li>User manager dashboard for adding or removing users / handling permissions / updating information</li>
            <li>Profile section for customization and updating user information</li>
          </ul>
          <br />
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
          <h3>What have I learned?</h3>
          <p>During this project I had to tackle numerous new and interesting problems that pushed me to become a better developer. From custom user authentication / authorization with combination of JWT, database organization & planning, cloudinary implementation & using puppeteer script to communicate with an api-less service. I gained experience in working on a more sizeable project that has a real user bases on the other side using the service that this app provides.</p>
          <p>The experience from building this project allows me to better structure projects in the future and provides a foundation from which I can build my skills when working on similar sized projects.</p>

          <h3>Challenges ahead and planned features?</h3>
          <p>Update the application to better handle large amount of data and be able to scale properly with more users.</p>
          <ul>
            <li>Update UI and visual components to be more pleasing</li>
            <li>Update asset search system & input to be more efficient when working with large amount of data</li>
            <li>Implement paganation for asset display</li>
            <li>Bulk asset / collection zipping & download </li>
          </ul>
        </div>
      </section>
      {/* <div className="footer-wrapepr"> */}
      <Footer />
      {/* </div> */}
    </main>
  );
}

export default ProjectPage;
