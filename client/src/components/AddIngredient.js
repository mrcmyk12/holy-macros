import React from "react";
import { Link } from "react-router-dom";

const AddIngredient = () => {
	return (
		<div className="container">
			<form>
				<div className="row">
					<p>Search Ingredients</p>
				</div>
				<div className="row">
					<div className="col-6">
						<input
							placeholder="Search Foods eg.(Rice, Tofu, Lettuce)"
							className="form-control"
							type={"text"}
						/>
					</div>
					<div className="col-2">
						<input
							className="form-control btn btn-primary"
							type={"submit"}
						/>
					</div>
				</div>
			</form>
			<div className="row">
				<div className="col-4 mb-3">
					<div className="card">
						<div className="card-body">
							<p>Rice</p>
							<p>
								160 Calories, Jasmine, 1 Cup, 6g Protein, 5g Carbs, 10g
								Fats
							</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 mb-3">
					<div className="card">
						<div className="card-body">
							<p>Rice</p>
							<p>
								160 Calories, Jasmine, 1 Cup, 6g Protein, 5g Carbs, 10g
								Fats
							</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 mb-3">
					<div className="card">
						<div className="card-body">
							<p>Rice</p>
							<p>
								160 Calories, Jasmine, 1 Cup, 6g Protein, 5g Carbs, 10g
								Fats
							</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 mb-3">
					<div className="card">
						<div className="card-body">
							<p>Rice</p>
							<p>
								160 Calories, Jasmine, 1 Cup, 6g Protein, 5g Carbs, 10g
								Fats
							</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 mb-3">
					<div className="card">
						<div className="card-body">
							<p>Rice</p>
							<p>
								160 Calories, Jasmine, 1 Cup, 6g Protein, 5g Carbs, 10g
								Fats
							</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 mb-3">
					<div className="card">
						<div className="card-body">
							<p>Rice</p>
							<p>
								160 Calories, Jasmine, 1 Cup, 6g Protein, 5g Carbs, 10g
								Fats
							</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 mb-3">
					<div className="card">
						<div className="card-body">
							<p>Rice</p>
							<p>
								160 Calories, Jasmine, 1 Cup, 6g Protein, 5g Carbs, 10g
								Fats
							</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-4 mb-3">
					<div className="card">
						<div className="card-body">
							<p>Rice</p>
							<p>
								160 Calories, Jasmine, 1 Cup, 6g Protein, 5g Carbs, 10g
								Fats
							</p>
						</div>
						<div className="card-footer">
							<Link to={"/addfood"}>
								<button className="btn btn-primary">Add</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddIngredient;
