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
      ...this.state,
      restaurantId: this.props.restaurantId,
      id: cuid(),
    };
    this.props.addReview(review);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="review">Review Content</label>
          <input
            name="review"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <label htmlFor="submit">Create Review</label>
          <input name="submit" type="submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
