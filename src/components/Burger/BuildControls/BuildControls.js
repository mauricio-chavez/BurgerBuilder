import React from "react";

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.sass';


const BuildControls = props => {

	const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

	const controls = Object.keys(props.ingredients).map(
		ingredient => {
			return (
				<BuildControl
					key={ ingredient }
					label={ capitalize(ingredient) }
					added={() => props.ingredientAdded(ingredient)}
					removed={() => props.ingredientRemoved(ingredient)}
					disabled={props.disabled[ingredient]}
				/>
			);
		}
	);

	return (
		<div className={ styles.BuildControls }>
			<p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
			{ controls }
		</div>
	);
}

export default BuildControls;