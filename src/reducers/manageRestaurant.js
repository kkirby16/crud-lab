import cuid from "cuid";

export default function manageRestaurant(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "ADD_RESTAURANT":
      return state.concat(action.restaurant);

    default:
      return state;
  }
}
