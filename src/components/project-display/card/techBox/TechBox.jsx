import React from 'react';
import './TechBox.scss';
import {
  FaReact, FaHtml5, FaCss3Alt, FaSass,
  FaNodeJs,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiExpress, SiVite } from 'react-icons/si';

function TechBox({ text, tech, color }) {
  return (
    <div className="wrapper" style={{ color }}>
      <div className="outline" style={{ color, borderColor: color }}>
        {/* JavaScript */}
        {tech && tech === 'JavaScript' && (
          // <IoLogoJavascript />
          <img className="tech-icon" src="/icons/colored/javascript.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'HTML' && (
          // <FaHtml5 />
          <img className="tech-icon" src="/icons/colored/html.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'CSS' && (
          // <FaCss3Alt />
          <img className="tech-icon" src="/icons/colored/css.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'React' && (
          // <FaReact />
          <img className="tech-icon" src="/icons/colored/react.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'SASS' && (
          // <FaSass />
          <img className="tech-icon" src="/icons/colored/sass.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'NodeJs' && (
          // <FaNodeJs />
          <img className="tech-icon" src="/icons/colored/node.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'MongoDB' && (
          // <BiLogoMongodb />
          <img className="tech-icon" src="/icons/colored/mongodb.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'Express' && (
          // <SiExpress />
          <img className="tech-icon" src="/icons/colored/express.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'Vite' && (
          // <SiVite />
          <img className="tech-icon" src="/icons/colored/vite.svg" alt="javascript-icon" />
        )}
      </div>
      <p className="text">
        {text}
      </p>
    </div>

  );
}

export default TechBox;
