import React from "react";

const Options = () => {
	return (
		<div className="container">
			<div className="row">
				<p>Which Other Nutrients Do You Want To Track?</p>
			</div>
			<form>
				<div className="row">
					<div className="col">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">Sugar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">Cholesterol</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">Vitamin B6</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">Vitamin C</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">Vitamin E</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">Magnesium</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">Zinc</label>
						</div>
					</div>
					<div className="col">
						<label className="form-label">Enter Weight (lbs)</label>
						<div className="col-4">
							<input type="number" className="form-control" />
						</div>
						<label className="form-label">Enter Height</label>
						<div className="row">
							<div className="col-3">
								<input className="form-control" />
							</div>
							<div className="col-3">
								<input className="form-control" />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<p>Daily Macros Goals:</p>
				</div>
				<div className="row">
					<div className="col-2">
						<label className="form-label">Calories</label>
						<div className="input-group">
							<input className="form-control" placeholder="Calories"/>
							<span className="input-group-text">cal</span>
						</div>
					</div>
					<div className="col-2">
						<label className="form-label">Carbohydrates</label>
						<div className="input-group">
							<input className="form-control" placeholder="Carbs"/>
							<span className="input-group-text">g</span>
						</div>
					</div>
					<div className="col-2">
						<label className="form-label">Proteins</label>
						<div className="input-group">
							<input className="form-control" placeholder="Proteins"/>
							<span className="input-group-text">g</span>
						</div>
					</div>
					<div className="col-2">
						<label className="form-label">Fats</label>
						<div className="input-group">
							<input className="form-control" placeholder="Fats"/>
							<span className="input-group-text">g</span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-8"></div>
					<div className="col-2">
						<input
							type={"submit"}
							className="form-control btn btn-primary"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Options;
