import React from "react";

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.sass';


const BuildControls = props => {

	const controls = [
		{ label: 'Salad', type: 'salad' },
		{ label: 'Bacon', type: 'bacon' },
		{ label: 'Cheese', type: 'cheese' },
		{ label: 'Meat', type: 'meat' },
	];

	return (
		<div className={styles.BuildControls}>
			{
				controls.map(
					ctrl => (
						<BuildControl key={ctrl.label} label={ctrl.label} />
					)
				)
			}
		</div>
	);
}

export default BuildControls;