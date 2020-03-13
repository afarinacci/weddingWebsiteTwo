import React from 'react';
import Particlebanner from '../components/ParticleBanner';

function NotFound() {
  return (
    <div className="content">
      <div className="pageTitleBackground">
        <Particlebanner />
        <h1 className="text-center pageTitle goldtext">404 - Page Not Found</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <h1 className="text-center">404 - Sorry this page is not found</h1>
      </main>
    </div>
  );
}

export default NotFound;
