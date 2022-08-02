export default (state=[], action)=> {
   switch(action.type){
      case 'FETCH_CARBOHYDRATES':
         return action.payload;
      default:
         return state
   }
}