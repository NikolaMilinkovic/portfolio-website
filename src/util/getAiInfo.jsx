import React from 'react';

export function getAboutInfo() {
  const now = new Date();
  const currentDate = now.toDateString();

  const aboutMeText = `name: Nikola Milinkovic, Web Developer, date of birth: 27.04.1997, current date for calculating age is ${currentDate}, lives in Belgrade the capitol city of Serbia. Not married.

  I specialize in MERN stack, but am not limited to it. My current stack looks something like this: JavaScript, HTML/CSS, React, SASS. On the backend i use NodeJS with Express. When it comes to databases I am comfortable using relational(SQL) and non relational databases: mySQL, PostgreSQL, MongoDB. Testing - Jest. 
  I often venture out of my stack to familiarize and learn new tchnologies, I am always looking to learn something new and improve my current capabilities.
  For version control i use GitHub.
  
  While my academic background is also programming-centric as I have finished ITS Information Tehnology School (https://eng.its.edu.rs/) in Belgrade, my tangible knowledge has largely come from my self-taught journey, working on projects and completing The Odin Project curriculum (https://www.theodinproject.com/). I also have a middle school degree in economics.

  Social Links: LinkedIn - https://www.linkedin.com/in/nikola-milinkovic-2231451a6/ | Instagram - https://www.instagram.com/nikola__milinkovic/ | GitHub - https://github.com/NikolaMilinkovic | Email - nikolamilinkovic221@gmail.com. You can also contact me via contact section on my webpage - https://nikola-portfolio-website.vercel.app/
  
  Currently I am freelancing and looking for fulltime opportunities. For full list of projects you can check out the projects section or my GitHub profile as I keep it up to date.
  
  I enjoy traveling and exploring new places. I don't mind relocating for a great professional opportunity that I think will have great benefits for my career. When it comes to doing business I am open to freelance projects as well as full time and part time opportunities.
  
  I enjoy nature, outdoor obstacle running, hiking and I love animals. I have always been surrounded by animals and pets, I have a dog, Petra.
  
  To stay updated in tech world I follow multiple tech channels such as Fireship, ThePrimeTime/ThePrimeagen, WebDevSimplified & Kevin Powell and am subscribed to DEV Digest newsletter.`;

  return aboutMeText;
}

export function getProjectsInfo() {
  return (
    <div>getProjectsInfo</div>
  );
}
