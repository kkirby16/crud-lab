import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  renderReviews = () => {
    const matchingReviews = this.props.reviews.filter((review) => {
      return review.restaurantId == this.props.restaurantId;
    });

    return matchingReviews.map((review) => {
      return (
        <Review
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview}
        />
      );
    });
  };

  render() {
    return <ul>{this.renderReviews()}</ul>;
  }
}

export default Reviews;
