import React from "react";

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.sass';

const Burger = props => {

	let transformedIngredients = Object.keys(props.ingredients).map(
		igKey => {
			return [...Array(props.ingredients[igKey])].map(
				(_, index) => {
					return <BurgerIngredient key={`${igKey}-${index}`} type={igKey} />
				}
			)
		}
	).reduce(
		(prev, curr) => {
			return prev.concat(curr);
		}, []
	);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>
	}

	return (
		<div className={styles.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
}

export default Burger;