import React, { useState } from 'react'
import './style.scss'

const TodoForm = ({ addContact }) => {
  const [formEl, setFormEl] = useState({
    name: '',
    phone: '',
  })

  const handleInputValue = (e) => {
    const { name, value } = e.target
    setFormEl((prevInputs) => ({ ...prevInputs, [name]: value }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    addContact(formEl)
    setFormEl({
      phone: '',
      name: '',
    })
  }

  return (
    <div className="form">
      <h2>Aplication Todo With Function Component</h2>
      <form className="formStyle" onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={formEl.name}
          name="name"
          placeholder="Name"
          onChange={handleInputValue}
        />
        <input
          type="tel"
          name="phone"
          value={formEl.phone}
          onChange={handleInputValue}
          placeholder="Phone"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
