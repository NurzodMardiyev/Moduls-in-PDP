import React, { Component } from 'react'
import Card from './Card'

class TodoList extends Component {
  render() {
    return (
      <div>
        <div className="headTable">
          <span className="no">No</span>
          <p className="task">Task</p>
          <p className="date">Date</p>
          <p className="status">Delete</p>
          <p className="edit">Edit</p>
        </div>
        {this.props.todos.map((todo) => {
          return (
            <Card
              key={todo.id}
              id={todo.id}
              task={todo.task}
              date={todo.date}
              complated={todo.complated}
              complatedTodo={this.props.complatedTodo}
              deleteTodo={this.props.deleteTodo}
              editTodo={this.props.editTodo}
            />
          )
        })}
      </div>
    )
  }
}

export default TodoList
