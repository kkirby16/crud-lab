import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {

  const matchingReviews = this.props.reviews.filter((review => { 
    review.restaurantId == this.props.restaurantId
  })

  renderReviews = () => {
    return matchingReviews.map((review) => {
      return (
        <Review
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview}
        />
      )})}

  render() {

    return <ul>{this.renderReviews()}</ul>;
  }
}

export default Reviews;
