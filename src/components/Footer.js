import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Countdown from './Countdown';

function Footer() {
  return (
    <footer className="bg-primary text-center">
      <div className="row  justify-content-center">
        <Countdown
          timeTillDate="12 21 2020, 04:30 pm"
          timeFormat="MM DD YYYY, h:mm a"
        />
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 socialCol">
          <h3>Andrea</h3>
          <a
            title="facebook-andie"
            href="https://www.facebook.com/andrea.farinacci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              className="socialIcon "
              inverse
            />
          </a>
          <a
            title="instagram-andie"
            href="https://www.instagram.com/afarinacci14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="socialIcon socialIconRight"
              inverse
            />
          </a>
        </div>
        <div className="col-12 col-sm-6 socialCol">
          <h3>Stephen</h3>
          <a
            title="facebook-steve"
            href="https://www.facebook.com/sjscannell4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              className="socialIcon"
              inverse
            />
          </a>
          <a
            title="instagram-steve"
            href="https://www.instagram.com/sjscannell4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="socialIcon socialIconRight"
              inverse
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
