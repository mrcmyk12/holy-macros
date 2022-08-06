import React,{useState} from "react";

const CaloriesCard = ({nutrients}) => {



   console.log(nutrients)

   const findCalories = ()=>{
      for(let i = 0; i < nutrients.length; i++){
         if(nutrients[i].nutrientName === "Energy"){
            return(
               <div className="card">
                  <div className="card-body">
                     <p>Calories = {nutrients[i].value}{" "}{nutrients[i].unitName}</p>
                     <p>15% of daily allowance</p>
                  </div>
               </div>
            )
         }
      }
   }

	return (
		<div>
			{findCalories()}
		</div>
	);
};

export default CaloriesCard
