import React from "react"

const CarbohydratesCard = ({nutrients})=>{

   const findCarbs = ()=>{
      for(let i = 0; i < nutrients.length; i++){
         if(nutrients[i].nutrientName === "Carbohydrate, by difference"){
            return(
               <div className="card">
                  <div className="card-body">
                     <p>Carbohydrates = {nutrients[i].value}{" "}{nutrients[i].unitName}</p>
                     <p>15% of daily allowance</p>
                  </div>
               </div>
            )
         }
      }
   }

   return(
      <div>
         {findCarbs()}
      </div>
   )
}

export default CarbohydratesCard