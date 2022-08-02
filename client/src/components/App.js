import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Options from "./Options";
import Diary from "./Diary";
import AddMeal from "./AddMeal";
import AddFood from "./AddFood";
import AddRecipe from "./AddRecipe";
import AddIngredient from "./AddIngredient";
import Recipes from "./Recipes";

const App = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/options" element={<Options />} />
				<Route path="/diary" element={<Diary />} />
				<Route path="/addmeal" element={<AddMeal />} />
				<Route path="/addfood" element={<AddFood />} />
				<Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/addingredient" element={<AddIngredient/>} />
        <Route path="/viewrecipes" element={<Recipes />}/>
			</Routes>
		</div>
	);
};

export default App;
