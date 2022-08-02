export default (state=[], action) => {
   switch(action.type){
      case "FETCH_DINNER":
         return action.payload
      case "ADD_DINNER_ITEM":
         return [...state, action.payload]
      default:
         return state;
   }
}