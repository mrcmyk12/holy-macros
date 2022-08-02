export default (state=[], action) => {
   switch(action.type){
      case "FETCH_PROTEIN":
         return action.payload;
      default:
         return state
   }
}