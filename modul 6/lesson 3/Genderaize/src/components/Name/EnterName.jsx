import React, { Component } from "react";
import "../../App.css";
class EnterName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addName(this.state);
  }
  render() {
    return (
      <form className="formEl" onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={this.handleOnChange}
          name="value"
        />
        <button type="submit">Enter</button>
      </form>
    );
  }
}

export default EnterName;
