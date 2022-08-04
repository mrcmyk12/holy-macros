import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchFoods, searchedFood } from "../actions";
import { Field, reduxForm } from "redux-form";
import RenderFoods from "./RenderFoods";
import axios from "axios";

const Search = ({ searchedFood, foods }) => {
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
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input value={value} onChange={(e) => handleChange(e)} />
			</form>
			<div className="row">Search Results:</div>
			<RenderFoods foodResults={foodResults} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		foods: state.foods
	};
};

export default connect(mapStateToProps, {
	searchedFood: searchedFood
})(Search);
