import cuid from "cuid";

export default function manageRestaurant(
  state = {
    restaurants: [],
    reviews: [],
  },
  action
) {
  console.log(action);

  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.text, id: cuid() };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant],
      };

    default:
      return state;
  }
}
