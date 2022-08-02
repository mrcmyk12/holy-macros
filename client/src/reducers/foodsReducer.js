export default (state=[], action)=> {
   switch (action.type){
      case "SEARCHED_FOODS":
         return action.payload;
      default:
         return state
   }
}