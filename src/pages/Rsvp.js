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
        <h5 className="text-center">
          In light of current events, we are postponing our wedding. We
          apologize for any inconvenience this may have caused, and look forward
          to celebrating with you. Please mark your calendars with our new
          wedding date of Monday, December 21st, 2020!
        </h5>
        <br />
        <h4 className="text-center">Please RSVP by the 15th of November. </h4>
        <br />
        <br />
        <RSVPForm />
      </main>
    </div>
  );
}

export default Rsvp;
