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
      const review = {
        ...action.review,
        id: cuid(),
      };

      return { ...state, reviews: [...state.reviews, review] };

    case "DELETE_REVIEW":
      console.log("deletedReview:", action);
      return {
        ...state,
        reviews: state.reviews.filter((review) => {
          return review.id !== action.reviewId;
        }),
      };

    default:
      return state;
  }
}
