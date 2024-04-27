import React, { useState } from 'react'

function MemberForm() {
  const memberForm = () => {
    const [formEl, setFormEl] = {
      name: '',
      age: '',
      birtday: '',
      adress: '',
      number: '',
      gender: false,
    }
  }

  const handleOnChange = () => {
    const { name, value } = e.target
    setFormEl((prevInputs) => ({ ...prevInputs, [name]: value }))
  }

  const style = {
    padding: '5px 10px',
    border: 'none',
    outline: 'none',
  }
  return (
    <form className="memberForm md:w-1/2 sm:w-full  mx-auto mt-10 bg-[#66DDAA] py-3">
      <div className="container mx-auto px-4 flex flex-col gap-3">
        <div className="w-full flex flex-col">
          <label htmlFor="name">FullName</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleOnChange}
            style={style}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" style={style} />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="birth">Birthday</label>
          <input type="text" id="birth" name="birthday" style={style} />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="adress">Adress</label>
          <input type="text" id="adress" name="adress" style={style} />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="number">Number</label>
          <input type="text" id="number" name="adress" style={style} />
        </div>
        <div className="w-full flex">
          <span className="w-1/2 flex gap-3 items-center">
            <label htmlFor="male">Male</label>
            <input type="checkbox" id="male" value="male" />
          </span>
          <span className="w-1/2 flex gap-3 items-center">
            <label htmlFor="female">Female</label>
            <input type="checkbox" id="female" value="female" />
          </span>
        </div>
        <div className="flex justify-end">
          <button
            className="px-2 py-1 border-2 border-red-600 hover:bg-[#ff0000] transition  ease-in-out  duration-300 text-center"
            type="submit"
          >
            Add Member
          </button>
        </div>
      </div>
    </form>
  )
}

export default MemberForm
