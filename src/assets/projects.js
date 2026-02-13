import afterschool from './after_school.png';
import notifyme from './notify_me.png';
import eggplantinvaders from './eggplant_invaders.png';
import tinymessage from './tinymessage.png';
import machete from './machete.png';
import framefinder from './frame-finder.png';

const projects = [
  {
    name: 'After School App',
    description: 'A private social network for teens to connect and share with their peers at their school',
    image: afterschool,
    url: "https://en.wikipedia.org/wiki/After_School_(app)"
  },
    {
    name: 'FrameFinder',
    description: 'AI powered bias ranking for Youtube channels',
    image: framefinder,
    url: "https://bias-checker.fly.dev/"
  },
  {
    name: 'NotifyMe',
    description: 'Node.js & Express application for monitoring real time Twitter stream for caltrain delay alerts',
    image: notifyme,
    url: "http://textmeif.com/"
  },
  {
    name: 'Eggplant Invaders',
    description: 'Space Invaders style game created for sex awareness month using Phaser.js & Slim PHP',
    image: eggplantinvaders,
    url: "https://squishyandroid.github.io/eggplantinvaders"
  },
  {
    name: 'TinyMessage',
    description: 'React based chat application utilizing Socket.io',
    image: tinymessage,
    url: "https://tinymessage.fly.dev/"
  },
  {
    name: 'Machete Energy Drink',
    description: 'Hollister, CA based Energy drink company',
    image: machete,
    url: "http://www.macheteenergy.com/"
  }
]

export default projects;
