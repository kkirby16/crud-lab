import uuid from "uuid";

export const addRestaurant = (restaurant) => {
  return {
    type: "ADD_RESTAURANT",
    text: restaurant,
  };
};

export const deleteRestaurant = (restaurantId) => {
  return {
    type: "DELETE_RESTAURANT",
    restaurantId: restaurantId,
  };
};
