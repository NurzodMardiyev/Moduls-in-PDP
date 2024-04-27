import React, { useState } from 'react'

function TableItem({ contact: { id, name, phone }, deleteTodo }) {
  return (
    <tr className="mb-2 flex items-center">
      <td className="w-[150px]">{name}</td>
      <td className="w-[200px]"> {phone}</td>
      <td className="flex gap-3 w-[150px]">
        <button
          className="border p-1 px-3 border-indigo-600"
          onClick={() => deleteTodo(id)}
        >
          delete
        </button>
        <button className="border p-1 px-3 border-indigo-600">edit</button>
      </td>
    </tr>
  )
}

export default TableItem
