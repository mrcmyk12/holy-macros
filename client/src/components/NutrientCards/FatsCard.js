import React from 'react'

const FatsCard = ({nutrients})=>{
 const findSaturatedFats = ()=>{
      for(let i = 0; i < nutrients.length; i++){
         if(nutrients[i].nutrientName === "Fatty acids, total saturated"){
            return(
               <div>
                  <p>Saturated Fat = {nutrients[i].value}{" "}{nutrients[i].unitName}</p>
               </div>
            )
         }
      }
   }

   const findTransFats = () => {
      for(let i = 0; i < nutrients.length; i++){
         if(nutrients[i].nutrientName === "Fatty acids, total trans"){
            return(
               <div>
                  <p>Trans Fat = {nutrients[i].value}{" "}{nutrients[i].unitName}</p>
               </div>
            )
         }
      }
   }

   return(
      <div className='card'>
         <div className='card-body'>
            {findSaturatedFats()}
            {findTransFats()}
            <p>15% of Daily Value</p>
         </div>
      </div>
   )
}

export default FatsCard