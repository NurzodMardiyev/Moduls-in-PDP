import React, { Component } from 'react'
import '../../App.css'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="" />
        <h3>Metapad</h3>
        <p>
          type: <span>bug</span>
        </p>
        <p>
          EXP: <span>43</span>
        </p>
      </div>
    )
  }
}

export default Card
