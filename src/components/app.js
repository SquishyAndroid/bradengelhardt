import React, { Fragment } from 'react';
import FullpageWrapper from './fullpage-wrapper';
import Particles from 'react-particles-js';

const linkStyles = (links, section) => {
  setTimeout(() => {
    links.forEach(function(link) {
      if (link.id === section) {
        link.style.color = "#FF6363";
      } else {
        link.style.color = '#757575';
      }
    });
  }, 450);
}

const fullpageOptions = {
  scrollBar: true,
  controlArrows: false,
  licenseKey: "89192CAC-D37443B6-88C0505A-540BF775",
  onLeave: (origin, destination, direction) => {
    const links = document.querySelectorAll('.header-links a');
    switch(destination.index) {
      case 0:
        links.forEach((link) => {
          link.style.color = 'white';
        });
        break;
      case 1:
        linkStyles(links, "about");
        break;
      case 2:
        linkStyles(links, "projects");
        break;
      case 3:
        linkStyles(links, "contact");
        break;
      default:
        links.forEach((link) => {
          link.style.color = '#757575';
        });
    }
  }
};

const App = () => {
  return (
    <Fragment>
      <Particles />
      <FullpageWrapper {...fullpageOptions} />
    </Fragment>
  )
}

export default App;
