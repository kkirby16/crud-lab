import React, { Component } from "react";
import { connect } from "react-redux";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { addRestaurant, deleteRestaurant } from "../actions/restaurants.js";

class RestaurantsContainer extends Component {
  render() {
    console.log("restaurants from state:", this.props.restaurants);
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps:", state);

  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant)),
    deleteRestaurant: (restaurantId) =>
      dispatch(deleteRestaurant(restaurantId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
