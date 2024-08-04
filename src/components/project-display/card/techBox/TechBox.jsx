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
        {tech && tech.toLowerCase() === 'javascript' && (
          // <IoLogoJavascript />
          <img className="tech-icon" src="/icons/colored/javascript.svg" alt="javascript-icon" />
        )}
        {tech && tech.toLowerCase() === 'html' && (
          // <FaHtml5 />
          <img className="tech-icon" src="/icons/colored/html.svg" alt="html-icon" />
        )}
        {tech && tech.toLowerCase() === 'css' && (
          // <FaCss3Alt />
          <img className="tech-icon" src="/icons/colored/css.svg" alt="css-icon" />
        )}
        {tech && tech.toLowerCase() === 'react' && (
          // <FaReact />
          <img className="tech-icon" src="/icons/colored/react.svg" alt="react-icon" />
        )}
        {tech && tech.toLowerCase() === 'sass' && (
          // <FaSass />
          <img className="tech-icon" src="/icons/colored/sass.svg" alt="sass-icon" />
        )}
        {tech && tech.toLowerCase() === 'nodejs' && (
          // <FaNodeJs />
          <img className="tech-icon" src="/icons/colored/node.svg" alt="nodejs-icon" />
        )}
        {tech && tech.toLowerCase() === 'mongodb' && (
          // <BiLogoMongodb />
          <img className="tech-icon" src="/icons/colored/mongodb.svg" alt="mongodb-icon" />
        )}
        {tech && tech.toLowerCase() === 'express' && (
          // <SiExpress />
          <svg className="tech-icon" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path className="tech-icon" d="m126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45-7.16 9.66-14.31 18.86-21.02 28.43-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13-25.06-32.63c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19 8.36 10.99 16.62 22.09 25.13 33.43z" />
            <path className="tech-icon" d="m1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06 9.9 7.79 12.36 18.77 11.87 31.15h-55.8c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89-5.32-5.6-7.58-12.57-8.58-20.1-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
          </svg>
        // <img className="tech-icon" src="/icons/colored/express.svg" alt="express-icon" />
        )}
        {tech && tech.toLowerCase() === 'vite' && (
          // <SiVite />
          <img className="tech-icon" src="/icons/colored/vite.svg" alt="vite-icon" />
        )}
        {tech && tech.toLowerCase() === 'heroku' && (
          // <SiVite />
          <img className="tech-icon" src="/icons/colored/heroku.svg" alt="heroku-icon" />
        )}
        {tech && tech.toLowerCase() === 'cloudinary' && (
          // <SiVite />
          <img className="tech-icon" src="/icons/colored/cloudinary.svg" alt="cloudinary-icon" />
        )}
        {tech && tech.toLowerCase() === 'puppeteer' && (
          <img className="tech-icon" src="/icons/colored/puppeteer.svg" alt="puppeteer-icon" />
        )}
        {tech && tech.toLowerCase() === 'mysql' && (
          <img className="tech-icon" src="/icons/colored/mysql.svg" alt="mysql-icon" />
        )}
        {tech && tech.toLowerCase() === 'jest' && (
          <img className="tech-icon" src="/icons/colored/jest.svg" alt="jest-icon" />
        )}
      </div>
      <p className="text">
        {text}
      </p>
    </div>

  );
}

export default TechBox;
