import React from 'react'

const ProteinCard = ({nutrients}) =>{
   const findProtein = ()=>{
      for(let i = 0; i < nutrients.length; i++){
         if(nutrients[i].nutrientName === "Protein"){
            return(
               <div className="card">
                  <div className="card-body">
                     <p>Protein = {nutrients[i].value}{" "}{nutrients[i].unitName}</p>
                     <p>15% of daily allowance</p>
                  </div>
               </div>
            )
         }
      }
   }

   return(
      <div>{findProtein()}</div>
   )
}

export default ProteinCard