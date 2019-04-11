import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
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
			totalPrice: 4,
			purchasable: false,
			purchasing: false
		}
	}

	updatePurchasedState = (ingredients) => {
		const sum = Object.keys(ingredients).map(
			ingredientKey => {
				return ingredients[ingredientKey];
			}
		).reduce(
			(sum, el) => {
				return sum + el;
			}, 0
		);

		this.setState({
			purchasable: sum > 0
		});
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

		this.updatePurchasedState(ingredients);
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

		this.updatePurchasedState(ingredients);
	}

	purchasedHandler = () => {
		this.setState({
			purchasing: true
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
				<Modal show={this.state.purchasing}>
					<OrderSummary ingredients={this.state.ingredients} />
				</Modal>
				<Burger ingredients={ this.state.ingredients } />
				<BuildControls
					ingredients={ this.state.ingredients }
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler} 
					disabled={disabledInfo}
					purchasable={!this.state.purchasable}
					ordered={this.purchasedHandler}
					price={this.state.totalPrice}
				/>
			</>
		);
	}
}

export default BurgerBuilder;