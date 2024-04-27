import React, { useState } from 'react'
import { v4 as id } from 'uuid'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

const Todo = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [],
  )

  const setData = () => {
    setContacts([{ id: 0, name: 'Ibrohim' }])
  }

  const addContact = (newContact) => {
    const data = [...contacts, { id: id(), ...newContact }]
    localStorage.setItem('contacts', JSON.stringify(data))
    setContacts(data)
  }

  const deleteTodo = (id) => {
    const filterData = contacts.filter((contact) => contact.id !== id)
    localStorage.setItem('contacts', JSON.stringify(filterData))
    setContacts(filterData)
  }

  const editTodo = (id) => {}

  return (
    <div>
      <button onClick={setData}>Click</button>
      <TodoForm addContact={addContact} />
      <TodoList contacts={contacts} deleteTodo={deleteTodo} />
    </div>
  )
}
export default Todo
