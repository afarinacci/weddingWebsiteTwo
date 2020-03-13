import React from 'react';
import champagne from './../images/champagne.png';
import cake from './../images/cake.png';
import balloons from './../images/balloons.png';
import serving from './../images/serving.png';
import weddingrings from './../images/weddingrings.png';
import Particlebanner from '../components/ParticleBanner';

function Events() {
  return (
    <div className="content">
      <div className="pageTitleBackground">
        <Particlebanner />
        <h1 className="text-center pageTitle goldtext">Events</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <div className="row">
          <div className="col-12 col-md-6 eventCol">
            <img src={balloons} alt="Welcome Drinks" className="eventIcon" />
            <h1 className="eventTitle">Welcome Drinks</h1>
            <p>
              <span style={{ fontWeight: 'bold' }}>Date:</span> Friday, June
              19th, 2020 <br />
              <span style={{ fontWeight: 'bold' }}>Time:</span> 7 - 9 PM <br />
              <span style={{ fontWeight: 'bold' }}>Location:</span> Glass Woods
              Tavern{' '}
            </p>
            <p>
              Meet us for a drink at Glass Woods Tavern, located inside the
              Hyatt Regency New Brunswick.
            </p>
          </div>
          <div className="col-12 col-md-6 eventCol">
            <img src={weddingrings} alt="Ceremony" className="eventIcon" />
            <h1 className="eventTitle">Ceremony</h1>
            <p>
              <span style={{ fontWeight: 'bold' }}>Date:</span> Saturday, June
              20th, 2020 <br />
              <span style={{ fontWeight: 'bold' }}>Time:</span> 11:30 AM - 12 PM{' '}
              <br />
              <span style={{ fontWeight: 'bold' }}>Location:</span> Park Chateau
              Estate &amp; Gardens
            </p>
            <p>
              <span style={{ fontStyle: 'italic' }}>
                The Ceremony will begin promptly at 11:30 AM{' '}
              </span>
              <br />
              Guests can arrive at the Park Chateau at 11 a.m. <br />
              Shuttle service will be provided from the Hyatt Regency New
              Brunswick at 10:20am. <br />
              There is also on-site parking for local guests.
            </p>
          </div>
          <div className="col-12 col-md-6 eventCol">
            <img src={serving} alt="Cocktail Hour" className="eventIcon" />
            <h1 className="eventTitle">Cocktail Hour</h1>
            <p>
              <span style={{ fontWeight: 'bold' }}>Date:</span> Saturday, June
              20th, 2020 <br />
              <span style={{ fontWeight: 'bold' }}>Time:</span> 12 - 1 PM <br />
              <span style={{ fontWeight: 'bold' }}>Location:</span> Park Chateau
              Estate &amp; Gardens
            </p>
            <p>Drinks and hors d'oeuvres will be served.</p>
          </div>
          <div className="col-12 col-md-6 eventCol">
            <img src={cake} alt="Reception" className="eventIcon" />
            <h1 className="eventTitle">Reception</h1>
            <p>
              <span style={{ fontWeight: 'bold' }}>Date:</span> Saturday, June
              20th, 2020 <br />
              <span style={{ fontWeight: 'bold' }}>Time:</span> 1 - 5 PM <br />
              <span style={{ fontWeight: 'bold' }}>Location:</span> Park Chateau
              Estate &amp; Gardens
            </p>
            <p>
              <span style={{ fontStyle: 'italic' }}>
                Dinner, drinks, and dancing!{' '}
              </span>
              <br />
              A plated dinner will be served. <br />
              Guests will order from a menu at their table. <br />
              Guests will be shuttled back to the Hyatt Regency New Brunswick at
              the end of the Reception.
            </p>
          </div>
          <div className="col-12 col-md-6 eventCol">
            <img src={champagne} alt="After Party" className="eventIcon" />
            <h1 className="eventTitle">After Party</h1>
            <p>
              <span style={{ fontWeight: 'bold' }}>Date:</span> Saturday, June
              20th, 2020 <br />
              <span style={{ fontWeight: 'bold' }}>Time:</span> 5:30 PM <br />
              <span style={{ fontWeight: 'bold' }}>Location:</span> Glass Woods
              Tavern{' '}
            </p>
            <p>
              The after party will take place at Glass Woods Tavern, located
              inside the Hyatt Regency New Brunswick.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Events;
