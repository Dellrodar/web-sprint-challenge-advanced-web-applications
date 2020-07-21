import React from 'react';
import ReactContactForm from 'react-mail-form';

 function ContactForm() {
  return (
    <div className="contact">
    <ReactContactForm to="test@test.com" />
    </div>
  )
};

export default ContactForm