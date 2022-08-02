export default (state=[], action) => {
   switch(action.type){
      case "FETCH_LUNCH":
         return action.payload
      case "ADD_LUNCH_ITEM":
         return [...state, action.payload]
      default:
         return state;
   }
}