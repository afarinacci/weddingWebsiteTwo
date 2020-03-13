import React from 'react';
import Particlebanner from '../components/ParticleBanner';

function GettingThere() {
  return (
    <div className="content">
      <div className="pageTitleBackground">
        <Particlebanner />
        <h1 className="text-center pageTitle goldtext">Getting There</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <div className="d-flex justify-content-center">
          <img
            src="https://lh3.googleusercontent.com/7aT2i8EG_ZD7odQs_bCk3gMOBIOsgVU6NbLklAoit45ynljY-d0E2fMnmltZQc1C8wjgBZwJ3zZX_rv77JB-yxCRnKjUevNnTZO_Zy6S2sEalq3dUfkbOz-5bp59BX0XdLYfU48grl0=w2400"
            alt="Hyatt Regency"
            className="pageImage"
          ></img>
        </div>
        <br />
        <p>
          We recommend out-of-town guests fly into Newark Liberty International
          Airport (EWR). You have the option to drive, uber, or take a 21 minute
          train ride + 6 minute walk from the airport to the Hyatt Regency New
          Brunswick. We are providing shuttle buses for wedding guests from the
          Hyatt Regency to the Park Chateau at 10:20am, and from the Park
          Chateau to the Hyatt Regency at 5pm on Saturday.{' '}
        </p>
        <p>
          Local guests can park at the venue, or park at the Hyatt and take the
          shuttle bus to and from the venue.
        </p>
        <br />
        <p>
          <h3
            style={{
              fontFamily: 'Satisfy, cursive',
              display: 'inline-block'
            }}
          >
            Hotel:{' '}
          </h3>
          <a
            href="https://www.hyatt.com/en-US/group-booking/EWRRN/G-AFSW"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Hyatt Regency New Brunswick
          </a>
          , 2 Albany St, New Brunswick, NJ 08901
        </p>
        <p>
          <h3
            style={{
              fontFamily: 'Satisfy, cursive',
              display: 'inline-block'
            }}
          >
            Wedding Venue:{' '}
          </h3>
          <a
            href="https://www.parkchateau.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Park Chateau Estate &amp; Gardens
          </a>
          , 678 Cranbury Rd, East Brunswick, NJ 08816
        </p>
        <br />
        <div className="d-flex justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d103731.58827305901!2d-74.51536526090713!3d40.4593782814619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd10c24839a8ad1cf!2sPark+Chateau+Estate+and+Gardens!5e0!3m2!1sen!2s!4v1559913408577!5m2!1sen!2s"
            width="600"
            height="450"
            frameBorder="0"
            title="Park Chateau"
            allowfullscreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default GettingThere;
