import React from 'react';
import Particlebanner from '../components/ParticleBanner';
import ContactForm from './../components/ContactForm';

function Contact() {
  return (
    <div className="content">
      <div className="pageTitleBackground">
        <Particlebanner />
        <h1 className="text-center pageTitle goldtext">Contact Us</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <ContactForm />
      </main>
    </div>
  );
}

export default Contact;
