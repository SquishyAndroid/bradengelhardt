import React, { Component, Fragment } from 'react';
import WOW from 'wowjs';
import logo from '../../assets/logo.svg';

const name  = { color: 'white' };
const divider = { color: '#FF6363' };
const marginTop = { marginTop: '12px' };

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
			this.writeText("FRONT-END WEB DEVELOPER");
		}, 1000);

		setTimeout(() => {
			let page = this.props.fullpageApi.getActiveSection();
			if (page.index == 0) {
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
				<div className="text-container wow fadeInDown" data-wow-delay="100ms">
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