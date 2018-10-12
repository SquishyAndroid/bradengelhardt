import React, { Component } from 'react';
import { InputGroup, TextArea, Toaster, Intent, Position } from "@blueprintjs/core";
import axios from "axios";

const AppToaster = Toaster.create({
    position: Position.TOP
});

export default class Contact extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	    	name: "",
	    	email: "",
	    	message: "",
	    	sent: false,
	    	buttonIcon: "fas fa-paper-plane"
	    };

	    this.handleForm = this.handleForm.bind(this);
	    this.handleFields = this.handleFields.bind(this);
	}

	showToast(message, intent) {
		AppToaster.show({
			message: message,
			intent: intent,
			timeout: 3000
		})
	}

	handleForm(e) {
		if (this.state.name && this.state.email && this.state.message && !this.state.sent) {
			axios.post("https://formcarry.com/s/TUrf0hxKt7m", {
				name: this.state.name,
				email: this.state.email,
				message: this.state.message,
		    },{
		    	headers: {"Accept": "application/json"}
		    })
		    .then((response) => {
		    	console.log(response);
		    	if (response.data.code === 200) {
		    		this.showToast("Message sent!", Intent.SUCCESS);
		    		this.setState({ buttonIcon: "fas fa-check-circle", sent: true });
		    	}
		    })
		    .catch((error) => {
		    	console.log(error);
		    	this.showToast("There was an issue.", Intent.DANGER);
		    });
		}
	    e.preventDefault();
  	}

	handleFields(e) {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		let buttonClass;
		if (this.state.name && this.state.email && this.state.message.length > 5) {
			buttonClass = "submit-button";
			if (this.state.sent) {
				buttonClass = "submit-button sent disabled";
			}
		} else {
			buttonClass = "submit-button disabled";
		}

		return(
			<div className="section fourth">
				<h1 className="app-title">Contact Me</h1>
				<p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
				
				<form onSubmit={this.handleForm}>
			        <InputGroup
						id="name"
						name="name"
						type="text"
						className="wow fadeInLeft"
						placeholder="Name"
						large="true"
						fill="true"
						rounded="true"
						data-wow-delay="400ms"
						onChange={this.handleFields}
					/>
					<InputGroup
						id="email"
						name="email"
						type="email"
						className="wow fadeInRight"
						placeholder="Email Address"
						large="true"
						fill="true"
						rounded="true"
						data-wow-delay="550ms"
						onChange={this.handleFields}
					/>
					<TextArea 
						id="message"
						name="message"
						className="bp3-input wow fadeInLeft"
						placeholder="Write a message"
						fill="true"
						large="true"
						rounded="true"
						data-wow-delay="300ms"
						onChange={this.handleFields}
					/>
					<button 
						className={buttonClass}
						type="submit"
					>Submit<span> <i className={this.state.buttonIcon}></i></span></button>
			      </form>
	        </div>
		)
	}
}