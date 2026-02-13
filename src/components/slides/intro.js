import React, { Component } from 'react';
import WOW from 'wowjs';
import Particles from 'react-particles-js';

const name  = { color: 'white' };
const divider = { color: '#FF6363' };
const marginTop = { marginTop: '12px' };

const particlesConfig = {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#ffffff"
    },
    opacity: {
      value: 0.7,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  }
};

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();

    setTimeout(() => {
      this.writeText("FULL STACK WEB DEVELOPER");
    }, 1000);

    setTimeout(() => {
      let page = this.props.fullpageApi.getActiveSection();
      if (page.index === 0) {
        this.props.moveDown();
      }
    }, 4400)
  }

  writeText(content) {
    let i = 0;
    let contentArray = content.split("");
    let text = '';
    setInterval(() => {
      if (i < contentArray.length) {
        text += contentArray[i];
        this.setState({ text });
        i++;
      }
    }, 100)
  }

  render() {
    return(
      <div className="section first">
        <Particles 
          params={particlesConfig}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
        <div className="text-container wow fadeInDown" data-wow-delay="100ms" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={name}>BRAD<span style={divider}>/</span>ENGELHARDT</h1>
          <p style={marginTop}>
            {this.state.text}
            <span id="holder"></span><span className="blinking-cursor">|</span>
          </p>
        </div>
        <i id="moveDown" className="fas fa-chevron-down fa-3x bounce" onClick={() => this.props.moveDown()}></i>
      </div>
    )
  }
}