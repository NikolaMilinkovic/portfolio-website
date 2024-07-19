import React, { useState, useEffect } from 'react';
import FormInput from './formInput/FormInput';
import FormTextarea from './formInput/FormTextarea';
import './ContactForm.scss';

function ContactForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  function onChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <div className="contact-wrapper">
      <form className="contact-form">
        <FormInput
          label="Name"
          id="input-name"
          name="username"
          type="text"
          placeholder=""
          required
          text={formData.username}
          onChange={(e) => onChange(e)}
        />
        <FormInput
          label="Email"
          id="input-email"
          name="email"
          type="text"
          placeholder=""
          required
          text={formData.email}
          onChange={(e) => onChange(e)}
        />
        <FormTextarea
          label="Message"
          id="input-message"
          name="message"
          placeholder=""
          required
          text={formData.message}
          onChange={(e) => onChange(e)}
        />
      </form>
    </div>

  );
}

export default ContactForm;
