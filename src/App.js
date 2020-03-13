import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';

import Footer from './components/Footer';
import CustomNavbar from './components/CustomNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
