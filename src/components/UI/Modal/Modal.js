import React from "react";

import styles from './Modal.module.sass';


const Modal = props => {

	let style = {}

	if (props.show) {
		style = {
			transform: 'translateY(0)',
			opacity: '1'
		};
	} else {
		style = {
			transform: 'translateY(-1000vh)',
			opacity: '0'
		}
	}

	return (
		<div
			className={ styles.Modal }
			style={style}
		>
			{ props.children }
		</div>
	);
};

export default Modal;