import React from 'react';
import Particlebanner from '../components/ParticleBanner';
import { Link } from 'react-router-dom';
import Collage1 from './../images/Collage1.png';
import Collage2 from './../images/Collage2.png';
import Collage3 from './../images/Collage3.png';
import Collage4 from './../images/Collage4.png';
import Collage5 from './../images/Collage5.png';
import Collage6 from './../images/Collage6.png';
import Collage7 from './../images/Collage7.png';
import Collage8 from './../images/Collage8.png';
import Collage9 from './../images/Collage9.png';
import Collage10 from './../images/Collage10.png';
import Collage11 from './../images/Collage11.png';
import Collage12 from './../images/Collage12.png';
import Collage13 from './../images/Collage13.png';
import Collage14 from './../images/Collage14.png';
import Collage15 from './../images/Collage15.png';
import Collage16 from './../images/Collage16.png';
import Collage17 from './../images/Collage17.png';
import Collage18 from './../images/Collage18.png';
import Collage19 from './../images/Collage19.png';
import Collage20 from './../images/Collage20.png';
import Collage21 from './../images/Collage21.png';
import Collage22 from './../images/Collage22.png';

class Gallery extends React.Component {
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
          <h1 className="text-center pageTitle goldtext">Gallery</h1>
        </div>
        <main className="container-fluid paddingAround max800">
          <img className="collage" src={Collage1} alt="Memory Collage" />

          <img className="collage" src={Collage2} alt="Memory Collage" />

          <img className="collage" src={Collage3} alt="Memory Collage" />

          <img className="collage" src={Collage4} alt="Memory Collage" />

          <img className="collage" src={Collage5} alt="Memory Collage" />

          <img className="collage" src={Collage6} alt="Memory Collage" />

          <img className="collage" src={Collage7} alt="Memory Collage" />

          <img className="collage" src={Collage8} alt="Memory Collage" />

          <img className="collage" src={Collage9} alt="Memory Collage" />

          <img className="collage" src={Collage10} alt="Memory Collage" />

          <img className="collage" src={Collage11} alt="Memory Collage" />

          <img className="collage" src={Collage12} alt="Memory Collage" />

          <img className="collage" src={Collage13} alt="Memory Collage" />

          <img className="collage" src={Collage14} alt="Memory Collage" />

          <img className="collage" src={Collage15} alt="Memory Collage" />

          <img className="collage" src={Collage16} alt="Memory Collage" />

          <img className="collage" src={Collage17} alt="Memory Collage" />

          <img className="collage" src={Collage18} alt="Memory Collage" />

          <img className="collage" src={Collage19} alt="Memory Collage" />

          <img className="collage" src={Collage20} alt="Memory Collage" />

          <img className="collage" src={Collage21} alt="Memory Collage" />

          <img className="collage" src={Collage22} alt="Memory Collage" />
          <br />
          <Link to="/" onClick={this.scrollTop}>
            Go back to the homepage
          </Link>
        </main>
      </div>
    );
  }
}

export default Gallery;
