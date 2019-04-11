import React from "react";

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.sass';


const BuildControls = props => {

	const controls = Object.keys(props.ingredients).map(
		ingredient => {
			return (
				<BuildControl
					key={ ingredient }
					label={ingredient}
					added={ () => props.ingredientAdded(ingredient) }
					removed={ () => props.ingredientRemoved(ingredient) }
					disabled={ props.disabled[ingredient] }
				/>
			);
		}
	);

	return (
		<div className={ styles.BuildControls }>
			<p>Current price: <strong>${ props.price.toFixed(2) }</strong></p>
			{ controls }
			<button
				className={ styles.OrderButton }
				disabled={props.purchasable}
				onClick={props.ordered}
			>
				ORDER NOW
			</button>
		</div>
	);
}

export default BuildControls;