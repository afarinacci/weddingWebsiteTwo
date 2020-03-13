import React from 'react';
import Particlebanner from '../components/ParticleBanner';
import Engagement from './../images/Engagement.png';

function OurStory() {
  return (
    <div className="content">
      <div className="pageTitleBackground">
        <Particlebanner />
        <h1 className="text-center pageTitle goldtext">Our Love Story</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <p>
          {' '}
          Andrea and Stephen met during their senior year at Carnegie Mellon
          University. They were part of the same small group for their chemical
          engineering capstone project (thanks to their best friends in class).
          Over the course of the semester, they spent several hours per week
          working together, sometimes late into the evenings.{' '}
        </p>
        <br />
        <p>
          When the project was finally complete, Andrea invited Stephen to a
          Christmas party at her house. Stephen had plans to attend a concert
          with his friend but convinced him to go to the party instead. Stephen
          never regretted missing that concert because they shared their first
          kiss that evening.
        </p>
        <br />
        <p>
          After graduation, Stephen had plans to move to Houston and work for
          ExxonMobil while Andrea planned to finish her Masters degree in
          Pittsburgh. Nevertheless, they decided to continue their relationship
          long distance.
        </p>
        <br />
        <p>
          After more than two years of flying back and forth to visit each
          other, Andrea moved to Houston to be with Stephen.
        </p>
        <br />
        <p>
          In the fall of 2017, Stephen was offered an exciting opportunity to
          work in Hanoi, Vietnam. Andrea was easily convinced to join the
          adventure and travel around Asia with Stephen. A couple months later,
          Stephen proposed to Andrea over a chocolate soufflé at the French
          restaurant in the iconic Metropole Hotel in Hanoi.
        </p>
        <br />
        <img
          src={Engagement}
          className="collage"
          alt="Engagement Photos Collage"
        />
      </main>
    </div>
  );
}

export default OurStory;
