import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import ingredientsData from '../../data/burger/ingredients.json';


class BurgerBuilder extends Component {

	constructor(props) {
		super(props);

		const ingredients = {}

		Object.keys(ingredientsData).forEach(
			ingredient => {
				ingredients[ingredient] = 0;
			}
		);

		this.state = {
			ingredients,
			totalPrice: 0
		}
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const newCount = oldCount + 1;
		const ingredients = { ...this.state.ingredients };
		ingredients[type] = newCount;

		const oldPrice = this.state.totalPrice;
		const priceAddition = ingredientsData[type];
		const totalPrice = oldPrice + priceAddition;

		this.setState({
			ingredients,
			totalPrice
		});
	}

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];

		if (oldCount === 0) {
			return;
		}

		const newCount = oldCount - 1;
		const ingredients = { ...this.state.ingredients };
		ingredients[type] = newCount;

		const oldPrice = this.state.totalPrice;
		const priceDeduction = ingredientsData[type];
		const totalPrice = oldPrice - priceDeduction;

		this.setState({
			ingredients,
			totalPrice
		});
	}

	render = () => {
		const disabledInfo = {
			...this.state.ingredients
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] === 0;
		}
		return (
			<>
				<Burger ingredients={ this.state.ingredients } />
				<BuildControls
					ingredients={ this.state.ingredients }
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler} 
					disabled={disabledInfo}
					price={this.state.totalPrice}
				/>
			</>
		);
	}
}

export default BurgerBuilder;