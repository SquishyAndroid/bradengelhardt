import afterschool from './after_school.png';
import notifyme from './notify_me.png';
import eggplantinvaders from './eggplant_invaders.png';
import tinymessage from './tinymessage.png';
import machete from './machete.png';
import xfaire from './xfaire.png';

const projects = [
	{
		name: 'After School App',
		description: 'A private social network for teens to connect and share with their peers at their school',
		image: afterschool
	},
	{
		name: 'NotifyMe',
		description: 'Node.js & Express application for monitoring real time Twitter stream for caltrain delay alerts',
		image: notifyme
	},
	{
		name: 'Eggplant Invaders',
		description: 'Space Invaders style game created for sex awareness month using Phaser.js & Slim PHP',
		image: eggplantinvaders
	},
	{
		name: 'TinyMessage',
		description: 'React based chat application utilizing Socket.io',
		image: tinymessage
	},
	{
		name: 'Machete Energy Drink',
		description: 'Hollister, CA based Energy drink company',
		image: machete
	},
	{
		name: 'xFaire',
		description: 'A proof of concept video streaming service offering 4K-Ready Live TV',
		image: xfaire
	}
]

export default projects;
