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
          <IoLogoJavascript />
        )}
        {tech && tech === 'HTML' && (
          <FaHtml5 />
        )}
        {tech && tech === 'CSS' && (
          <FaCss3Alt />
        )}
        {tech && tech === 'React' && (
          <FaReact />
        )}
        {tech && tech === 'SASS' && (
          <FaSass />
        )}
        {tech && tech === 'NodeJs' && (
          <FaNodeJs />
        )}
        {tech && tech === 'MongoDB' && (
          <BiLogoMongodb />
        )}
        {tech && tech === 'Express' && (
          <SiExpress />
        )}
        {tech && tech === 'Vite' && (
          <SiVite />
        )}
      </div>
      <p className="text">
        {text}
      </p>
    </div>

  );
}

export default TechBox;
