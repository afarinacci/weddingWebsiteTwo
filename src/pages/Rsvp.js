import React from 'react';
import Particlebanner from '../components/ParticleBanner';
import RSVPForm from './../components/RSVPForm';

function Rsvp() {
  return (
    <div className="content">
      <div className="pageTitleBackground">
        <Particlebanner />
        <h1
          className="text-center pageTitle goldtext"
          style={{ letterSpacing: '10px' }}
        >
          RSVP
        </h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <h4 className="text-center">Kindly reply by May 15, 2020.</h4>
        <br />
        <RSVPForm />
      </main>
    </div>
  );
}

export default Rsvp;
