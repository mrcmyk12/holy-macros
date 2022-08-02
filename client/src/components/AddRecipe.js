import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AddRecipe = () => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div className="container">
			<div className="row">
				<div className="col-3 mt-5">
					<button onClick={toggle} className="btn btn-success">
						Recipe Name
					</button>
				</div>
            <div className="col-6">

            </div>
				<div className="col-3 mt-5">
					<button onClick={toggle} className="btn btn-primary">
						Add Recipe
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-3">
					<p>Recipe Name</p>
				</div>
				<div className="col-2">
					<Link to={'/addingredient'}>
						<button className="btn btn-warning">Add Ingredient</button>
					</Link>
				</div>
			</div>
			<div className="row">Ingredients</div>
			<div className="row">
				<div className="col-3 mb-4">
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
								<button className="btn btn-danger">Remove</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-3 mb-4">
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
								<button className="btn btn-danger">Remove</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-3 mb-4">
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
								<button className="btn btn-danger">Remove</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-3 mb-4">
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
								<button className="btn btn-danger">Remove</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="col-3 mb-4">
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
								<button className="btn btn-danger">Remove</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-3 mb-4">
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
								<button className="btn btn-danger">Remove</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-3 mb-4">
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
								<button className="btn btn-danger">Remove</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalBody>
					<form>
						<div className="row">
							<p>Recipe Name</p>
						</div>
						<div className="row">
							<input className="form-control" type={"text"} />
						</div>
						<div className="row">Number of Servings</div>
						<div className="row">
							<div className="col">
								<select className="form-select">
									<option selected value={"1.0"}>
										1.0
									</option>
									<option value={"1.5"}>1.5</option>
									<option value={"2.0"}>2.0</option>
									<option value={"2.5"}>2.5</option>
									<option value={"3.0"}>3.0</option>
									<option value={"3.5"}>3.5</option>
									<option value={"4.0"}>4.0</option>
									<option value={"4.5"}>4.5</option>
									<option value={"5.0"}>5.0</option>
									<option value={"5.5"}>5.5</option>
									<option value={"6.0"}>6.0</option>
								</select>
							</div>
							<div className="col">
								<input
									className="form-control btn btn-primary"
									type={"submit"}
								/>
							</div>
						</div>
					</form>
					<ModalFooter>
						<button onClick={toggle} className="btn btn-danger">
							Close
						</button>
					</ModalFooter>
				</ModalBody>
			</Modal>
		</div>
	);
};

export default AddRecipe;
