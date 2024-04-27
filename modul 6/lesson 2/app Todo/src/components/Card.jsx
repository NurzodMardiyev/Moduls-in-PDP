import React, { Component } from 'react'
import '../App.css'

class Card extends Component {
  render() {
    return (
      <div>
        <label className="bodyTable" htmlFor={this.props.id}>
          <span className="no">
            <input
              type="checkbox"
              id={this.props.id}
              defaultChecked={this.props.complated}
              onChange={() => this.props.complatedTodo(this.props.id)}
            />
          </span>
          <p className="task">{this.props.task}</p>
          <p className="date">{this.props.date}</p>
          <p className="status">
            <button onClick={() => this.props.deleteTodo(this.props.id)}>
              delete
            </button>
          </p>
          <p className="edit">
            <button onClick={() => this.props.editTodo(this.props.id)}>
              Edit
            </button>
          </p>
        </label>
      </div>
    )
  }
}

export default Card
