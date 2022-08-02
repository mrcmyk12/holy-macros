import axios from "axios";

//bnmAHdhHqxvoSOhbcpPgVTLBj66GdZ9I1jtEw7Di

//"https://api.nal.usda.gov/fdc/v1/foods/search?api_key=bnmAHdhHqxvoSOhbcpPgVTLBj66GdZ9I1jtEw7Di&query=cheddar%20cheese&dataType=Foundation,SR%20Legacy&pageSize=25&sortBy=description&sortOrder=asc&brandOwner=Kar%20Nut%20Products%20Company"

export const fetchFoods = (searchTerm) => {
	return async (dispatch) => {
		const response = await axios.get(
			`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=bnmAHdhHqxvoSOhbcpPgVTLBj66GdZ9I1jtEw7Di`,
			{},
			{
				params: {
					query: searchTerm
				}
			}
		)
      dispatch({ type: "SEARCHED_FOODS", payload: response })
	};
};

export const searchedFood = (food) => {
	console.log(food);
	return {
		type: "SEARCHED_FOOD",
		payload: searchedFood
	};
};
