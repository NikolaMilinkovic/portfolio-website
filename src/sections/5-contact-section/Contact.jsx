import React from 'react';
import { Element } from 'react-scroll';
import './Contact.scss';
import ContactForm from '../../components/contactForm/ContactForm';

function Contact() {
  return (
    <section className="contact-section">
      <Element id="scroll-contact" name="scroll-contact">
        <ContactForm />
      </Element>
      {/* <img src="/images/2.png" className="footer-image" alt="forest transition" /> */}
    </section>
  );
}

export default Contact;
