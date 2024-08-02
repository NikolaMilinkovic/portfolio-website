import React, { useEffect, useState } from 'react';
import './TechBox.scss';
import {
  FaReact, FaHtml5, FaCss3Alt, FaSass,
  FaNodeJs,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiExpress, SiVite } from 'react-icons/si';

function TechBox({ text, tech, color }) {
  const [iconBackground, setIconBackgoround] = useState('rgba(244, 244, 244, 0.8)');
  useEffect(() => {
    if (color === 'black') {
      setIconBackgoround('rgba(244, 244, 244, 0.8)');
    } else {
      setIconBackgoround('rgba(0, 0, 0, 0.8)');
    }
  }, [color]);

  return (
    <div className="wrapper" style={{ color }}>
      <div className="outline" style={{ color, borderColor: color, backgroundColor: iconBackground }}>
        {/* JavaScript */}
        {tech && tech === 'JavaScript' && (
          // <IoLogoJavascript />
          <img className="tech-icon" src="/icons/colored/javascript.svg" alt="javascript-icon" />
        )}
        {tech && tech === 'HTML' && (
          // <FaHtml5 />
          <img className="tech-icon" src="/icons/colored/html.svg" alt="html-icon" />
        )}
        {tech && tech === 'CSS' && (
          // <FaCss3Alt />
          <img className="tech-icon" src="/icons/colored/css.svg" alt="css-icon" />
        )}
        {tech && tech === 'React' && (
          // <FaReact />
          <img className="tech-icon" src="/icons/colored/react.svg" alt="react-icon" />
        )}
        {tech && tech === 'SASS' && (
          // <FaSass />
          <img className="tech-icon" src="/icons/colored/sass.svg" alt="sass-icon" />
        )}
        {tech && tech === 'NodeJs' && (
          // <FaNodeJs />
          <img className="tech-icon" src="/icons/colored/node.svg" alt="nodejs-icon" />
        )}
        {tech && tech === 'MongoDB' && (
          // <BiLogoMongodb />
          <img className="tech-icon" src="/icons/colored/mongodb.svg" alt="mongodb-icon" />
        )}
        {tech && tech === 'Express' && (
          // <SiExpress />
          <img className="tech-icon" src="/icons/colored/express.svg" alt="express-icon" />
        )}
        {tech && tech === 'Vite' && (
          // <SiVite />
          <img className="tech-icon" src="/icons/colored/vite.svg" alt="vite-icon" />
        )}
        {tech && tech === 'Heroku' && (
          // <SiVite />
          <img className="tech-icon" src="/icons/colored/heroku.svg" alt="heroku-icon" />
        )}
        {tech && tech === 'Cloudinary' && (
          // <SiVite />
          <img className="tech-icon" src="/icons/colored/cloudinary.svg" alt="cloudinary-icon" />
        )}
        {tech && tech === 'Puppeteer' && (
          <img className="tech-icon" src="/icons/colored/puppeteer.svg" alt="puppeteer-icon" />
        )}
      </div>
      <p className="text">
        {text}
      </p>
    </div>

  );
}

export default TechBox;
