import React from 'react';
import Particles from 'react-particles-js';

class Particlebanner extends React.Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: false
              }
            },
            shape: {
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            color: {
              value: '#fff3b2'
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 0.6,
              direction: 'none',
              out_mode: 'out'
            }
          }
        }}
        style={{
          position: 'absolute'
        }}
      />
    );
  }
}

export default Particlebanner;
