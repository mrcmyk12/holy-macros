import React from "react";
import { useLocation } from "react-router-dom";

import CaloriesCard from "./NutrientCards/CaloriesCard";
import CarbohydratesCard from "./NutrientCards/CarbohydratesCard";
import ProteinCard from "./NutrientCards/ProteinCard";
import FatsCard from "./NutrientCards/FatsCard";
import RenderNutrients from "./RenderNutrients";

const AddFood = () => {
	const location = useLocation();
	console.log(location.state.food);
	const food = location.state.food;

	const renderServingSize = () => {

		if (food.servingSize) {
			return (
				<div>
					{food.servingSize} {food.servingSizeUnit}
				</div>
			);
		}
		
			let servingsArray = [];

			for (let i = 0; i < food.foodMeasures.length; i++) {
				servingsArray.push(food.foodMeasures[i].disseminationText);
			}

			const servings = servingsArray.map((serving) => {
				if(serving === "Quantity not specified"){
					return(
						<div></div>
					)
				}

				return <div>{serving}</div>;
			});
		
			return(
				<div>{servings}</div>
			)

	
	};

	return (
		<div className="container">
			<form>
				<div className="row">
					<div className="col-10">
						<p>{food.description}</p>
					</div>
					<div className="col-2">
						<input
							type={"submit"}
							className="form-control btn btn-primary"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<label className="form-label">Date</label>
						<input type="date" className="form-control" />
					</div>
					<div className="col">
						<label className="form-label">Meal</label>
						<select className="form-select">
							<option selected>Select Meal Type</option>
							<option value="breakfast">Breakfast</option>
							<option value="lunch">Lunch</option>
							<option value="dinner">Dinner</option>
							<option value="snack">Snack</option>
						</select>
					</div>
					<div className="col">
						<label className="form-label">Servings</label>
						<select className="form-select">
							<option selected>Servings</option>
							<option value="1.0">1.0</option>
							<option value="1.5">1.5</option>
							<option value="2.0">2.0</option>
							<option value="2.5">2.5</option>
							<option value="3.0">3.0</option>
							<option value="3.5">3.5</option>
							<option value="4.0">4.0</option>
							<option value="4.5">4.5</option>
							<option value="5.0">5.0</option>
							<option value="5.5">5.5</option>
							<option value="6.0">6.0</option>
						</select>
					</div>
					<div className="col">
						<p>Serving Size</p>
						{renderServingSize()}
					</div>
				</div>
				<div className="row">
					<div className="col-3 mb-5">
						<CaloriesCard nutrients={food.foodNutrients} />
					</div>
					<div className="col-3 mb-5">
						<CarbohydratesCard nutrients={food.foodNutrients} />
					</div>
					<div className="col-3 mb-5">
						<ProteinCard nutrients={food.foodNutrients} />
					</div>
					<div className="col-3 mb-5">
						<FatsCard nutrients={food.foodNutrients} />
					</div>
				</div>

				<div className="row">
					<p>Tracked Nutrients</p>
				</div>
				<div className="row">
					<div className="col-3 mb-5">
						<div className="card">
							<div className="card-body">
								<p>14g Fat</p>
								<p>25% of daily allowance</p>
							</div>
						</div>
					</div>
					<div className="col-3 mb-5">
						<div className="card">
							<div className="card-body">
								<p>14g Fat</p>
								<p>25% of daily allowance</p>
							</div>
						</div>
					</div>
					<div className="col-3 mb-5">
						<div className="card">
							<div className="card-body">
								<p>14g Fat</p>
								<p>25% of daily allowance</p>
							</div>
						</div>
					</div>
					<div className="col-3 mb-5">
						<div className="card">
							<div className="card-body">
								<p>14g Fat</p>
								<p>25% of daily allowance</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-10"></div>
					<div className="col-2">
						<input
							type={"submit"}
							className="form-control btn btn-primary"
						/>
					</div>
				</div>
			</form>
			<div className="row">
				<p>Other Nutrition Facts</p>
			</div>
			<div>
				<RenderNutrients nutrients={food.foodNutrients} />
			</div>
		</div>
	);
};

export default AddFood;
