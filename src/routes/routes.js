import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
import GettingThere from '../pages/GettingThere';
import NotFound from '../pages/NotFound';
import OurStory from '../pages/OurStory';
import Gallery from '../pages/Gallery';
import Hotel from '../pages/Hotel';
import Rsvp from '../pages/Rsvp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/events" component={Events}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/getting-there" component={GettingThere}></Route>
    <Route exact path="/our-story" component={OurStory}></Route>
    <Route exact path="/gallery" component={Gallery}></Route>
    <Route exact path="/hotel" component={Hotel}></Route>
    <Route exact path="/rsvp" component={Rsvp}></Route>
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
