import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  componentDidMount() {
    console.log("individual_restaurant:", this.props.restaurant);
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button
            onClick={() =>
              this.props.deleteRestaurant(this.props.restaurant.id)
            }
          >
            {" "}
            X{" "}
          </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
}

export default Restaurant;
