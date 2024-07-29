import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import './Contact.scss';
import ContactForm from '../../components/contactForm/ContactForm';
import BirdGif from '../../components/birdGif/BirdGif';

function Contact() {
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

  return (
    <section className="contact-section">
      <Element id="scroll-contact" name="scroll-contact">
        <ContactForm />
      </Element>

      {/* Birds */}
      { screenWidth && (
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
      )}
    </section>
  );
}

export default Contact;
