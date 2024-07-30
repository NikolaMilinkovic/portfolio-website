import React from 'react';

export function getAboutInfo() {
  const now = new Date();
  const currentDate = now.toDateString();

  const aboutMeText = `name: Nikola Milinkovic, Web Developer, date of birth: 27.04.1997, current date for calculating age is ${currentDate}, lives in Belgrade the capitol city of Serbia. I specialize in MERN stack, but am not limited to it. My current stack looks something like this: JavaScript, TypeScript, HTML/CSS, React, ReactNative, SASS. On the backend i use NodeJS with Express. When it comes to databases I am comfortable using relational(SQL) and non relational databases: mySQL, PostgreSQL, MongoDB. When it comes to testing i use Jest. I often venture out of my stack to familiarize and learn new tchnologies, I am always looking to learn something new and improve my current capabilities. I began programming in 2021, primarily through self-study and TheOdinProject curriculkum. While my academic background is also programming-centric, my tangible knowledge has largely come from my self-taught journey. Social Links: LinkedIn - https://www.linkedin.com/in/nikola-milinkovic-2231451a6/ | Instagram - https://www.instagram.com/nikola__milinkovic/ | GitHub - https://github.com/NikolaMilinkovic. Currently I am freelancing and looking for fulltime opportunities. For full list of you can check out the projects section or my GitHub profile as I keep it up to date.`;

  return aboutMeText;
}

export function getProjectsInfo() {
  return (
    <div>getProjectsInfo</div>
  );
}
