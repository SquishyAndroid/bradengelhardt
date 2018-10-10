import React from 'react';

const Footer = () => {
	return(
		<div className="section fifth fp-auto-height">
				<div className="footer social-links">
					<p>CONNECT WITH ME</p>
		          	<span>
		          		<a href="https://www.linkedin.com/in/bradleyengelhardt" target="_blank" rel="noopener noreferrer">
		          			<i className="fab fa-linkedin fa-2x"></i>
		          		</a>
		          	</span>
		          	<span>
		          		<a href="https://twitter.com/bradengelhardt" target="_blank" rel="noopener noreferrer">
		          			<i className="fab fa-twitter fa-2x"></i>
		          		</a>
		          	</span>
		          	<span>
		          		<a href="https://github.com/SquishyAndroid" target="_blank" rel="noopener noreferrer">
		          			<i className="fab fa-github fa-2x"></i>
		          		</a>
		          	</span>
		          	<span>
		          		<a href="http://codepen.io/SquishyAndroid/pens/public/" target="_blank" rel="noopener noreferrer">
		          			<i className="fab fa-codepen fa-2x"></i>
		          		</a>
		          	</span>
		        </div>
		</div>      
	)
}

export default Footer;