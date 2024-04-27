import React, { Component } from "react";
import "../../App.css";
import Male from "./img/male.jpg";
import Female from "./img/female.jpg";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleNone = {
      display: "none",
    };
    const styleBlock = {
      display: "flex",
    };
    const genderStyle = {
      width: "100%",
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
    };
    return (
      <div>
        <div className="card" style={this.props.open ? styleBlock : styleNone}>
          <img src={this.props.complated ? Male : Female} alt="male" />
          <p>{this.props.name}</p>
          <p style={genderStyle}>{this.props.gender}</p>
        </div>
      </div>
    );
  }
}

export default Card;
