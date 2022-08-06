import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {connect} from 'react-redux'

import {searchedFood} from '../actions'
import RenderFoods from "./RenderFoods";

const AddIngredient = () => {
	const [value, setValue] = useState([]);
	const [foodResults, setFoodResults] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		console.log(value);
		e.preventDefault();
		axios
			.get(
				`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=bnmAHdhHqxvoSOhbcpPgVTLBj66GdZ9I1jtEw7Di&query=${value}`
			)
			.then(function (response) {
				searchedFood(response.data);
				setFoodResults(response.data);
			});
	};

	return (
		<div className="container">
			<div className="row"><p>Search Food</p></div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input placeholder="Search Foods here eg.(Cheese, Lettuce, Broccoli, Tomatoes, Tofu)" className="form-control" value={value} onChange={(e) => handleChange(e)} />
			</form>
			<div className="row">
				<p>Search Results</p>
			</div>
			<div className="row">
			<RenderFoods foodResults={foodResults} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { foods: state.foods };
};

export default connect(mapStateToProps, {
	searchedFood: searchedFood
})(AddIngredient);
