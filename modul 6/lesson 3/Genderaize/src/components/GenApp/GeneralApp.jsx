import React, { Component } from "react";
import EnterName from "../Name/EnterName.jsx";
import Card from "../Card/Card.jsx";

class GeneralApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: "",
      complated: false,
      name: "",
      gender: "",
    };
    this.addName = this.addName.bind(this);
  }

  addName(name) {
    const newName = name;

    this.setState({ value: newName }, () => {
      fetch(`https://api.genderize.io?name=${this.state.value.value}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.gender === "male") {
            this.setState({ complated: true });
          } else {
            this.setState({ complated: false });
          }
          this.setState({ name: res.name });
          this.setState({ gender: res.gender });
        });
      if (this.state.value.value === "") {
        this.setState({ open: false });
      } else {
        this.setState({ open: true });
      }
    });
  }

  render() {
    return (
      <div>
        <EnterName addName={this.addName} />
        <Card
          complated={this.state.complated}
          name={this.state.name}
          gender={this.state.gender}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default GeneralApp;
