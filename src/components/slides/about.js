import React, { Component } from 'react';
import { Position, Tooltip } from "@blueprintjs/core";
import devIcons from '../../assets/devicons.js';

export default class About extends Component {
	renderIcons(iconList) {
		let int = 500;
		return iconList.map(icon => {
			int += 90;
			return(
				<div className="dev-icon" key={icon.name}>
					<Tooltip content={icon.name} position={Position.RIGHT}>
						<i className={icon.class + " wow fadeInUp"} data-wow-delay={int + "ms"}></i>
					</Tooltip>
	      </div>
			)
		})
	}

	render() {
		return (
			<div className="section second">
				<p className="wow fadeInDown" data-wow-delay="400ms">Hi, I'm <strong>Brad Engelhardt!</strong> I'm a Silicon Valley based Full Stack Web Developer focused on creating clean, responsive websites & applications. Here are some of the tools I've used:</p>
				<br />
				<ul className="dev-icons">{this.renderIcons(devIcons)}</ul>
	        </div>
		)
	}
}