import React, { Component } from 'react'
import '../App.css'
class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      date: '',
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleOnClick(e) {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <form className="inputForm" onSubmit={this.handleOnClick}>
        <input type="text" onChange={this.handleOnChange} name="task" />
        <input type="date" onChange={this.handleOnChange} name="date" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default InputForm
