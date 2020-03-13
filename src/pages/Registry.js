import React from 'react';
import Particlebanner from '../components/ParticleBanner';
import { Link } from 'react-router-dom';

function Registry() {
  return (
    <div className="content">
      <div className="pageTitleBackground">
        <Particlebanner />
        <h1 className="text-center pageTitle goldtext">Registry</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <p>Registry Coming Soon</p>
        <br />
        <Link to="/">Go back to the homepage</Link>
      </main>
    </div>
  );
}

export default Registry;
