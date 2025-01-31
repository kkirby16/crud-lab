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

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.id !== action.restaurantId
        ),
      };

    case "ADD_REVIEW":
      console.log(action);
      return { ...state, reviews: [...state.reviews, action.review] };

    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((review) => {
          review.id !== action.reviewId;
        }),
      };

    default:
      return state;
  }
}
