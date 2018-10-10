import React from 'react';
import { InputGroup, TextArea } from "@blueprintjs/core";

const Contact = () => {
	return(
		<div className="section fourth">
			<h1 className="app-title">Contact Me</h1>
			<p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
			<InputGroup
				id="name"
				className="wow fadeInLeft"
				placeholder="Name"
				large="true"
				fill="true"
				rounded="true"
				data-wow-delay="400ms"
			/>
			<InputGroup
				id="email"
				className="wow fadeInRight"
				placeholder="Email Address"
				large="true"
				fill="true"
				rounded="true"
				data-wow-delay="550ms"
			/>
			<TextArea 
				id="message"
				className="bp3-input wow fadeInLeft"
				placeholder="Write a message"
				fill="true"
				large="true"
				rounded="true"
				data-wow-delay="300ms"
			/>
			<button className="submit-button disabled"
			>Submit<span> <i className="fas fa-paper-plane"></i></span></button>
        </div>
	)
}

export default Contact;