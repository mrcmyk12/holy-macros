export default (state=[], action) => {
   switch(action.type){
      case "FETCH_SNACK":
         return action.payload
      case "ADD_SNACK_ITEM":
         return [...state, action.payload]
      default:
         return state;
   }
}