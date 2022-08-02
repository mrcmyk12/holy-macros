export default (state=[], action)=> {
   switch (action.type){
      case "FETCH_CALORIES":
         return action.payload;
      default:
         return state
   }
}