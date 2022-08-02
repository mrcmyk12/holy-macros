import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchFoods, searchedFood } from "../actions";
import { Field, reduxForm } from "redux-form";
import FetchFoods from "./RenderFoods";
import axios from "axios";



const Search = ({ fetchFoods }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		axios
			.get(
				`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=bnmAHdhHqxvoSOhbcpPgVTLBj66GdZ9I1jtEw7Di`,
				{},
				{
					params: {
						query: value
					}
				}
			)
			.then(function (response) {
				searchedFood(response);
            console.log(response)
			});

	};

	return (
		<div>
			<form onSubmit={() => handleSubmit()}>
				<input value={value} onChange={(e) => setValue(e.target.value)} />
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		foods: state.foods
	};
};

export default connect(mapStateToProps, {
	searchedFood: searchedFood,
	fetchFoods: fetchFoods
})(Search);

//    renderInput({input,label}){
//       return(
//          <div className="col-5 mb-5">
//             <label>Search Foods</label>
//             <input placeholder="Search Foods" className="form-control" {...input} />
//          </div>
//       )
//    }

//    onSubmit(searchTerm){
//       axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=bnmAHdhHqxvoSOhbcpPgVTLBj66GdZ9I1jtEw7Di`,{},{
//          params:{
//             query: searchTerm
//          }
//       })
//          .then(function(response){
//             console.log(response)
//          })

//    }

//    render(){
//       console.log(this.props)
//       return(
//          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
//             <Field name="searchTerm"  component={this.renderInput}/>
//          </form>
//       )
//    }
// }

// export default reduxForm({
//    form: "search",
// })(Search)
