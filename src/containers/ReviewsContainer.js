import React, { Component } from "react";
import { connect } from "react-redux";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { addReview, deleteReview } from "../actions/reviews";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch(addReview(review)),
  };
};

export default connect(null, mapDispatchToProps)(ReviewsContainer);
