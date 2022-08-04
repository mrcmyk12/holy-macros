import React, { useDebugValue, useEffect } from "react";
import { connect } from "react-redux";
import { searchedFood } from "../actions";
import { Link } from "react-router-dom";


const RenderFoods = (props) => {
	console.log(props.foodResults);
   

   


   if(props.foodResults == []){
      return (
         <div>
       
         </div>
      )
   }

   const objectMap =()=> props.foodResults.foods.map((food)=>{
      return(
         <div>{food.description}</div>
      )
   })


   console.log(props.foodResults.foods[0])
		return (
			<div>{objectMap()}</div>
		);
	};



const mapStateToProps = (state) => {
	return { foods: state.foods };
};

export default connect(mapStateToProps, {
	searchedFood: searchedFood
})(RenderFoods);

