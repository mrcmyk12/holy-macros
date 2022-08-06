import React, { useDebugValue, useEffect } from "react";
import { connect } from "react-redux";
import { searchedFood } from "../actions";
import { Link } from "react-router-dom";

const RenderFoods = (props) => {
	console.log(props.foodResults);

	if (props.foodResults == []) {
		return <div></div>;
	}

	const objectMap = () =>
		props.foodResults.foods.map((food) => {
			return (
				<div className="col-4">
					<div className="card">
						<div className="card-body">
                     <p>{food.brandName}</p>
							<p>{food.description}</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"} state={{ food: food }}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
			);
		});

	return <div className="row">{objectMap()}</div>;
};

const mapStateToProps = (state) => {
	return { foods: state.foods };
};

export default connect(mapStateToProps, {
	searchedFood: searchedFood
})(RenderFoods);
