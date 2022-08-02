import React from "react";

const AddFood = () => {
	return (
		<div className="container">
			<form>
			<div className="row">
				<div className="col-10">
					<p>Rice</p>
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
						<p>1 Cup</p>
					</div>
				</div>
				<div className="row">
					<div className="col-3 mb-5">
						<div className="card">
							<div className="card-body">
								<p>100 Calories</p>
								<p>160% of daily allowance</p>
							</div>
						</div>
					</div>
					<div className="col-3 mb-5">
						<div className="card">
							<div className="card-body">
								<p>100g Carbohydrates</p>
								<p>50% of daily allowance</p>
							</div>
						</div>
					</div>
					<div className="col-3 mb-5">
						<div className="card">
							<div className="card-body">
								<p>104g Protein</p>
								<p>15% of daily allowance</p>
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
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
			<div className="row">
				<div className="col-8">Vitamin A</div>
				<div className="col-4">18g</div>
				<hr />
			</div>
		</div>
	);
};

export default AddFood;
