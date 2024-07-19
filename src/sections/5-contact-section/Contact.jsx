import React from 'react';
import { Element } from 'react-scroll';
import './Contact.scss';
import ContactForm from '../../components/contactForm/ContactForm';

function Contact() {
  return (
    <section className="contact-section">
      <Element id="scroll-contact" name="scroll-contact">
        <p>This is my Contact section</p>
        <ContactForm />
      </Element>
      <img src="/images/1.png" className="footer-image" alt="forest transition" />
    </section>
  );
}

export default Contact;
