import React from 'react';

const Modal = ({ handleClose, isOpen}) => {
	console.log(isOpen);
	const showHideClassName = isOpen ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<p>Hey I'm a modal!</p>
			<button onClick={() => handleClose()}>close</button>
	    </div>
	);
};

module.exports = Modal;