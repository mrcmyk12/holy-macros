import React from "react";

const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<p>Today's Macros Summary</p>
			</div>
			<div className="row">
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Calories</p>
                     <p>Remaining = Consumed - Goal</p>
                     <p>1000 Calories Consumed</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Carbohydrates</p>
                     <p>Remaining = Consumed - Goal</p>
                     <p>1000 Carbohydrates Consumed</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Proteins</p>
                     <p>Remaining = Consumed - Goal</p>
                     <p>10g of Protein Consumed</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Fats</p>
                     <p>Remaining = Consumed - Goal</p>
                     <p>10g of Fat Consumed</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            Other Nutrients You Are Tracking
         </div>
         <div className="row">
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Sugar</p>
                     <p>Remaining = Consumed - Goal</p>
                     <p>1000 Calories Consumed</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Cholesterol</p>
                     <p>Remaining = Consumed - Goal</p>
                     <p>1000 Carbohydrates Consumed</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Vitamin C</p>
                     <p>Remaining = Consumed - Goal</p>
                     <p>10g of Protein Consumed</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Magnesium</p>
                     <p>Remaining = Consumed - Goal</p>
                     <p>10g of Fat Consumed</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            Previous Results
         </div>
         <div className="row">
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Yesterday</p>
                     <p>Calories Consumed: 1000</p>
                     <p>Carbohydrates: 100g</p>
                     <p>Proteins: 15g</p>
                     <p>Fats: 12g</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Thursday</p>
                     <p>Calories Consumed: 1000</p>
                     <p>Carbohydrates: 100g</p>
                     <p>Proteins: 15g</p>
                     <p>Fats: 12g</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Wednesday</p>
                     <p>Calories Consumed: 1000</p>
                     <p>Carbohydrates: 100g</p>
                     <p>Proteins: 15g</p>
                     <p>Fats: 12g</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="card">
                  <div className="card-body">
                     <p>Tuesday</p>
                     <p>Calories Consumed: 1000</p>
                     <p>Carbohydrates: 100g</p>
                     <p>Proteins: 15g</p>
                     <p>Fats: 12g</p>
                  </div>
               </div>
            </div>
         </div>
		</div>
	);
};

export default Home;
