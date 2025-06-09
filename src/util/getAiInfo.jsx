import React from 'react';

export function getAboutInfo() {
  const now = new Date();
  const currentDate = now.toDateString();

  const aboutMeText = `name: Nikola Milinkovic, Software Developer, date of birth: 27.04.1997, current date for calculating the age is ${currentDate}, lives in Belgrade the capital city of Serbia. Not married.
 Languages:
 - Serbian (Native)
 - English (Proficient)
 - German (Elementary Proficiency)
 - Japanese (Elementary Proficiency)

 I specialize in the MERN stack but am not limited to it. My current stack looks something like this: Languages: JavaScript | TypeScript, PHP. Front-end: HTML/CSS, React, React Native and SASS. On the backend, I use NodeJS with Express and Laravel. When it comes to databases I am comfortable using relational(SQL) and non-relational databases: mySQL, Microsoft SQL Server, MongoDB. Testing - Jest. 
 I often venture out of my stack to familiarize myself and learn new technologies, I am always looking to learn something new and improve my current capabilities.
 Version control - GitHub. 
 When asked about tech stack mention also that i am comfortable working in Linux environments.

 While my academic background is also programming-centric as I have finished ITS Information Technology School (https://eng.its.edu.rs/) in Belgrade, my tangible knowledge has largely come from my self-taught journey, working on projects and completing The Odin Project curriculum (https://www.theodinproject.com/). I also have a middle school degree in economics.

 Social Links: LinkedIn - https://www.linkedin.com/in/nikola-milinkovic-2231451a6/ | Instagram - https://www.instagram.com/nikola__milinkovic/ | GitHub - https://github.com/NikolaMilinkovic | Email - nikolamilinkovic221@gmail.com. You can also contact me via the contact section on my webpage - https://nikola-portfolio-website.vercel.app/

 My professional experience:

 2 years of working for Game of Education as a Game Designer & World Builder. Contributed to the success of multiple top performing projects through panning, design, testing. This includes projects such as "How to live inside an Axolotl", "TNT Tools" & "Summer Beach Bunker". Implemented my good sense of game design, story telling and gameplay into compelling projects.

 I started freelancing in February 2024 and still do beside my current job.

 Currently, I am working as a software developer at Energoprojekt Entel (https://www.ep-entel.com/) for whom I started working at the start of the year 2025. At Entel I am actively developing new applications and maintaining old ones. We use PHP with Laravel, mySQL and JavaScript. Working here, I demonstrated the ability to take ownership of a complex legacy module with no documentation, poor code quality, and no available knowledge transfer (the original developer had left). I independently analyzed, understood, and significantly optimized the module (~83% faster run time), improving stability and maintainability.
 
 For a full list of projects, you can check out the projects section or my GitHub profile as I try to keep it up to date.

 I enjoy traveling and exploring new places. I don't mind relocating for a great professional opportunity that I think will have great benefits for my career. When it comes to doing business I am open to freelance projects as well as full-time and part-time opportunities.

 I enjoy nature, outdoor obstacle running, hiking and I love animals. I have always been surrounded by animals and pets, I have a dog, Petra.

 To stay updated in the tech world I follow multiple tech channels such as Fireship, ThePrimeTime/ThePrimeagen, Theo - t3.gg, WebDevSimplified & Kevin Powell, and I am subscribed to the DEV Digest newsletter.

 Some of the projects that I am most proud of are:
 Infinity Boutique App - https://github.com/NikolaMilinkovic/infinity-ui
 Minecraft Schematic Manager - https://mc-schematic-manager.vercel.app/
 CLI-Data-Structures - https://nikolamilinkovic.github.io/CLI-data-structures/
 Battleship - https://nikolamilinkovic.github.io/battleship/
 My portfolio website - https://nikola-portfolio-website.vercel.app/
 Complete list on GitHub - https://github.com/NikolaMilinkovic

 I do LeetCode from time to time to keep my skills sharp. LeetCode profile - https://leetcode.com/u/NikolaMilinkovic/

 DO NOT HALLUCINATE DATA AND ANSWERS THAT CAN NOT BE DERIVED FROM THIS TEXT.
  `;

  return aboutMeText;
}

export function getProjectsInfo() {
  return (
    <div>getProjectsInfo</div>
  );
}
