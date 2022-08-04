import React from "react";
import { connect } from 'react-redux'
import { fetchFoods } from '../actions'
import { Link } from "react-router-dom";
import RenderFoods from "./RenderFoods";

import Search from "./Search";

const Diary = () => {
	return (
		<div className="container">
			<div className="row">
				<p>Today's Meals</p>
			</div>
			<div className="row">
				<div className="col-3">
					<div className="card">
						<div className="card-body">
							<p>Breakfast</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card-body">
							<p>Lunch</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card-body">
							<p>Dinner</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card-body">
							<p>Snacks</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row mb-5">
				<div className="col-2">
					<Link to={"/addmeal"}>
						<p>Add Meal</p>
					</Link>
				</div>
				<div className="col-2">
					<Link to={"/addrecipe"}>
						<p>Add Recipe</p>
					</Link>
				</div>
				<div className="col-2">
					<Link to={"/viewrecipes"}>
						<p>View Recipes</p>
					</Link>
				</div>
			</div>
			<Search />
		</div>
	);
};

const mapStateToProps = (state) => {
	return{

	}
}

export default connect(mapStateToProps, {
	fetchFoods: fetchFoods
})(Diary);
