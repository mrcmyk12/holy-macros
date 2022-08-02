export default (state=[], action) => {
   switch(action.type) {
      case "FETCH_FAT":
         return action.payload;
      default:
         return state
   }
}