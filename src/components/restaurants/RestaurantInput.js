import React, { Component } from "react";
import cuid from "cuid";

class RestaurantInput extends Component {
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
    console.log(this.state.text);
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <label htmlFor="submit">Create Restaurant</label>
          <input name="submit" type="submit" onClick={this.handleSubmit} />
        </form>
        {/* Restaurant Input */}
      </div>
    );
  }
}

export default RestaurantInput;
