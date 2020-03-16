import React from 'react';
import Particlebanner from '../components/ParticleBanner';

function Hotel() {
  return (
    <div className="content">
      <div className="pageTitleBackground">
        <Particlebanner />
        <h1 className="text-center pageTitle goldtext">Hotel</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <div className="">
          <img
            src="https://lh3.googleusercontent.com/cCOQcq2mVGEQKAnkw2IIRd8O0no5BjQ1l41x2krV7TIGZlsdCMts-WcqAX7-Hi0JndDpOu-EiG8_voNZXjS3okQvl8WYJ8tzaNjoYWkYbSierXSrh73-2S59c266ct38L9vdst5Fxg4=w2400"
            alt="Hyatt Regency"
            className="pageImage"
          ></img>
        </div>
        <br />
        <h1>Hyatt Regency New Brunswick</h1>
        <p>
          Address: 2 Albany St, New Brunswick, NJ 08901 <br />
          The hotel is located 8 miles from the wedding venue.
        </p>
        <br />
        <h3
          style={{
            fontFamily: 'Satisfy, cursive'
          }}
        >
          How to Book
        </h3>
        <p>
          We reserved a block of rooms at the Hyatt Regency New Brunswick.{' '}
          <span style={{ fontWeight: 'bold' }}>
            Please book through our{' '}
            <a
              href="https://www.hyatt.com/en-US/group-booking/EWRRN/G-AFSW"
              target="_blank"
              rel="noopener noreferrer"
            >
              online reservation link
            </a>
          </span>
          .
        </p>

        <p>
          To make your reservations, please{' '}
          <a
            href="https://www.hyatt.com/en-US/group-booking/EWRRN/G-AFSW"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
          .
        </p>

        <p>
          If you need additional assistance, please contact Hyatt customer
          service at 877-803-7534 or{' '}
          <a
            href="https://about.hyatt.com/en/contact.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{' '}
          to find contact information by region.
        </p>

        <p>
          If the group rate is no longer available, prevailing rates may be
          offered for some or all of your dates.
        </p>
        <br />
        <h3
          style={{
            fontFamily: 'Satisfy, cursive'
          }}
        >
          Guestroom Rates
        </h3>
        <p>
          $149 per night for Standard King Guest Rooms <br />
          $159 per night for Standard Rooms with 2 Double Beds
        </p>
        <br />
        <h3
          style={{
            fontFamily: 'Satisfy, cursive'
          }}
        >
          Parking
        </h3>
        <p>
          A parking garage is conveniently attached to the hotel and is covered.
          Guests in our hotel block will receive $5.00 off per car/per night for
          self-parking.
        </p>
        <br />
        <div className="d-flex justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d375968.9360634738!2d-74.47514264707905!3d40.723766474419314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x361a4b64733209ec!2sHyatt+Regency+New+Brunswick!5e0!3m2!1sen!2s!4v1559912716911!5m2!1sen!2s"
            width="600"
            height="450"
            frameBorder="0"
            align="middle"
            title="Hyatt Regency"
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default Hotel;
