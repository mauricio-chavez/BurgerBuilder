import React from "react";
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.module.sass';

const BurgerIngredient = props => {
	switch (props.type) {
		case 'bread-bottom':
			return <div className={styles.BreadBottom}></div>;

		case 'bread-top':
			return (
				<div className={styles.BreadTop}>
					<div className={styles.Seeds1}></div>
					<div className={styles.Seeds2}></div>
				</div>
			);

		case 'meat':
			return <div className={styles.Meat}></div>;

		case 'cheese':
			return <div className={styles.Cheese}></div>;

		case 'salad':
			return <div className={styles.Salad}></div>;

		case 'bacon':
			return <div className={styles.Bacon}></div>;

		default:
			return null;
	}
};

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
}

export default BurgerIngredient;