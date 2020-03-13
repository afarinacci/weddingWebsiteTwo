import React from 'react';
import Particlebanner from '../components/ParticleBanner';
import Newcarousel from './../components/Newcarousel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlane,
  faCalendarAlt,
  faBed,
  faHeart,
  faCheckSquare,
  faCamera
} from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTop = this.scrollTop.bind(this);
  }
  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  render() {
    return (
      <div className="content">
        <div className="pageTitleBackground">
          <Particlebanner />
          <h1 className="text-center pageTitle goldtext">
            Andrea &amp; Stephen
          </h1>
          <h1 className="text-center weddingDate goldtext">6.20.2020</h1>
        </div>
        <main className="container-fluid paddingAround max800">
          <section
            style={{
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <Newcarousel />
          </section>
          <br />
          <section className="welcomeMessage">
            <h1
              style={{
                fontFamily: 'Satisfy, cursive'
              }}
              className="text-center"
            >
              We're Getting Married!
            </h1>
            <p>
              Welcome to our wedding website! We created this website to help
              you plan for our big day. You will find important information
              regarding our wedding weekend, such as event details, hotel block
              information, travel tips, and more.
              <br />
              <br />
              Please come back to RSVP when you receive your formal invitation.
              <br />
              <br />
              We're so excited to share this special day with all of our
              favorite people.
              <br />
              <br />
              Love,
            </p>
            <h3
              style={{
                fontFamily: 'Satisfy, cursive',
                marginTop: '0rem'
              }}
            >
              Andrea Farinacci &amp; Stephen Scannell
            </h3>
          </section>
          <br />
          <div className="row">
            <div className="col-6 col-md-4 iconCol">
              <p className="text-center">
                <Link
                  to="/events"
                  className="iconLink"
                  onClick={this.scrollTop}
                >
                  <FontAwesomeIcon icon={faCalendarAlt} size="4x" />
                  <br /> Weekend Events
                </Link>
              </p>
            </div>
            <div className="col-6 col-md-4 iconCol">
              <p className="text-center">
                <Link
                  to="/getting-there"
                  className="iconLink"
                  onClick={this.scrollTop}
                >
                  <FontAwesomeIcon icon={faPlane} size="4x" />
                  <br /> How To Get There
                </Link>
              </p>
            </div>
            <div className="col-6 col-md-4 iconCol">
              <p className="text-center">
                <Link to="/hotel" className="iconLink" onClick={this.scrollTop}>
                  <FontAwesomeIcon icon={faBed} size="4x" />
                  <br /> Accommodations
                </Link>
              </p>
            </div>
            <div className="col-6 col-md-4 iconCol">
              <p className="text-center">
                <Link
                  to="/gallery"
                  className="iconLink"
                  onClick={this.scrollTop}
                >
                  <FontAwesomeIcon icon={faCamera} size="4x" />
                  <br /> Gallery
                </Link>
              </p>
            </div>
            <div className="col-6 col-md-4 iconCol">
              <p className="text-center">
                <Link
                  to="/our-story"
                  className="iconLink"
                  onClick={this.scrollTop}
                >
                  <FontAwesomeIcon icon={faHeart} size="4x" />
                  <br /> Our Story
                </Link>
              </p>
            </div>
            <div className="col-6 col-md-4 iconCol">
              <p className="text-center">
                <Link to="/rsvp" className="iconLink" onClick={this.scrollTop}>
                  <FontAwesomeIcon icon={faCheckSquare} size="4x" />
                  <br /> RSVP Online
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
