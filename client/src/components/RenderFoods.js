import React, {useEffect} from "react";
import { connect } from "react-redux";
import { searchedFood } from "../actions";
import { Link } from "react-router-dom";

const RenderFoods = ({ foods, searchedFood }) => {

   useEffect(() => {
      console.log(foods)
   })

	return (
		<div>
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
	);
};

const mapStateToProps = (state) => {
	return { foods: state.foods };
};

export default connect(mapStateToProps, {
	searchedFood: searchedFood
})(RenderFoods);
