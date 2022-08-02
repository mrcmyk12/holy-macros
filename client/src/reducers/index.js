import { combineReducers } from 'redux';
import proteinReducer from './macros/proteinReducer';
import caloriesReducer from './macros/caloriesReducer';
import carbohydratesReducer from './macros/carbohydratesReducer'
import fatReducer from './macros/fatReducer';
import breakfastReducer from './meals/breakfastReducer'
import dinnerReducer from './meals/dinnerReducer'
import lunchReducer from './meals/lunchReducer'
import snackReducer from './meals/snackReducer'
import {reducer as formReducer} from 'redux-form'
import foodsReducer from './foodsReducer';

export default combineReducers({
   carbohydrates: carbohydratesReducer,
   calories:caloriesReducer,
   fat:fatReducer,
   protein:proteinReducer,
   breakfast:breakfastReducer,
   lunch:lunchReducer,
   dinner:dinnerReducer,
   snack:snackReducer,
   foods:foodsReducer,
   form: formReducer
})