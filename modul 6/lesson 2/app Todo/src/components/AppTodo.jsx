import { Component } from 'react'
import InputForm from './InputForm'
import TodoList from './TodoList'

class AppTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    this.addTodo = this.addTodo.bind(this)
    this.complatedTodo = this.complatedTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }

  addTodo(todo) {
    const newTodo = {
      id: this.state.todos.length,
      ...todo,
      complated: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  complatedTodo(id) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.complated = !todo.complated
        return todo
      } else {
        return todo
      }
    })

    this.setState({ todos: newTodos })
  }

  deleteTodo(id) {
    const indexTodo = this.state.todos.findIndex((elIndex) => elIndex.id === id)
    if (indexTodo !== -1) {
      this.state.todos.splice(indexTodo, 1)
      this.setState({ todos: [...this.state.todos] })
      return this.state.todos
    } else {
      this.setState({ todos: [...this.state.todos] })
      return this.state.todos
    }
  }

  // editTodo()
  editTodo(id) {
    const indexTodo = this.state.todos.findIndex((elIndex) => elIndex.id === id)
    if (indexTodo !== -1) {
      this.state.todos[indexTodo].task = prompt('change task')
      this.setState({ todos: [...this.state.todos] })
    }
  }

  render() {
    return (
      <>
        <InputForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          complatedTodo={this.complatedTodo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </>
    )
  }
}
export default AppTodo
