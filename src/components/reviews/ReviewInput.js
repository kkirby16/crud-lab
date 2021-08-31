import React, { Component } from "react";
import Reviews from "./Reviews";
import cuid from "cuid";

class ReviewInput extends Component {
  componentDidMount() {
    console.log("reviewInput props:", this.props.restaurant);
  }

  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId,
      // id: cuid(),
    };
    this.props.addReview(review);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="review">Review Content</label>
          <input
            name="review"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <label htmlFor="submit">Create Review</label>
          <input name="submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
