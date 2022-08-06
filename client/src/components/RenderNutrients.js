import React from "react";
import { arrayInsert } from "redux-form";

const RenderNutrients = ({ nutrients }) => {
	const renderNutrientBar = (name, value, unit) => {
		return (
			<div className="row">
				<div className="col-8">{name}</div>
				<div className="col-4">
					{value} {unit}
				</div>
				<hr />
			</div>
		);
	};

	// const nutrientMap = nutrients.map((nutrient) => {
	// 	return (
	// 		<div className="row">
	// 			<div className="col-8">hello</div>
	// 			<div className="col-4">
	// 				{nutrient.value} {nutrient.unitName}
	// 			</div>
	// 			<hr />
	// 		</div>
	// 	);
	// });

	let nutrientName = [];
	let nutrientValue = [];
	let nutrientUnitName = [];

	for (let i = 0; i < nutrients.length; i++) {
		nutrientName.push(nutrients[i].nutrientName);
		nutrientValue.push(nutrients[i].value);
		nutrientUnitName.push(nutrients[i].unitName);
	}



   const renderName = 
      nutrientName.map((name)=>{

         if(name === "Energy"){
            return(
               <div>Calories<hr /></div>
            )
         }

         return(
            <div>
               {name}
               <hr />
            </div>
         )
      })


   const renderValue = 
      nutrientValue.map((value)=>{
         return(
            <div>
               {value}
               <hr />
            </div>
         )
      })
   

   const renderUnit = 
      nutrientUnitName.map((unit)=>{
         return(
            <div>{unit}<hr /></div>
         )
      })
   




	return (
		<div className="row">
         <div className="col-8">{renderName}</div>
         <div className="col-3">{renderValue}</div>
         <div className="col-1">{renderUnit}</div>
		</div>
	);
};

export default RenderNutrients;
