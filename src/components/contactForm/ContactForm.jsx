import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import FormInput from './formInput/FormInput';
import FormTextarea from './formInput/FormTextarea';
import useElementOnScreen from '../../util/useElementOnScreen';
import AfterContact from './afterContact/AfterContact';
import OnClickCopy from './afterContact/onClickCopy/OnClickCopy';
import './ContactForm.scss';

function ContactForm() {
  // Used to animate fade in on render
  const [isVisible, setIsVisible] = useState(true);
  const [containerRef] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }, isVisible, setIsVisible, true);
  // Show / Hide form on submit
  const [showForm, setShowForm] = useState(true);
  function toggleForm() {
    setShowForm(!showForm);
  }

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const form = useRef(null);

  function onChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailPattern.test(formData.user_email)) {
      emailjs.sendForm('service_hf7sheg', 'template_gmxiswf', form.current, {
        publicKey: 'KHoHo3k5egSEwO2Fw',
      })
        .then(
          () => {
            setShowForm(false);
            setFormData({
              user_name: '',
              user_email: '',
              message: '',
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      console.log('Invalid email, sending error.');
    }
  };
  return (
    <div className="contact-wrapper" ref={containerRef}>
      <div className={`after-message-screen ${showForm ? 'hideForm' : 'showForm'}`}>
        <AfterContact
          isActive={showForm}
          toggleForm={toggleForm}
        />
      </div>
      <form ref={form} className={`contact-form ${showForm ? 'showForm' : 'hideForm'} ${isVisible ? 'show-left' : 'hide-left'}`} onSubmit={(e) => sendEmail(e)}>
        <h1>Contact me!</h1>
        <p>
          <span className="bold-span">Email:</span>
          {' '}
          <OnClickCopy
            string="nikolamilinkovic221@gmail.com"
            align="center"
            justify="start"
            minWidth="unset"
          />
        </p>
        <FormInput
          label="Name"
          id="user_name"
          name="user_name"
          type="text"
          placeholder="Your name"
          required
          text={formData.user_name}
          onChange={(e) => onChange(e)}
        />
        <FormInput
          label="Email"
          id="user_email"
          name="user_email"
          type="text"
          placeholder="Your email address"
          required
          text={formData.user_email}
          onChange={(e) => onChange(e)}
        />
        <FormTextarea
          label="Message"
          id="input-message"
          name="message"
          placeholder="Message"
          required
          text={formData.message}
          onChange={(e) => onChange(e)}
        />
        <button type="submit" className="btn-submit">
          Send
          {/* <img className="message-icon" src="/icons/black/envelope-solid.svg" alt="message" /> */}
        </button>
      </form>
    </div>

  );
}

export default ContactForm;
