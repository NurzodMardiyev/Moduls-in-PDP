import React from 'react'
import TableItem from './TableItem'

function TodoList({ contacts, deleteTodo }) {
  return (
    <div className="tableTodo flex items-center w-full justify-center">
      <table className="table-auto flex flex-col gap-3 mt-4">
        <thead>
          <tr className="text-left  border-b-2 pb-1">
            <th className="w-[150px]">Name</th>
            <th className="w-[200px]">Phone</th>
            <th className="w-[150px]">Action</th>
          </tr>
        </thead>
        <tbody className="flex flex-col">
          {contacts.map((cantact) => (
            <TableItem
              key={contacts.id}
              contact={cantact}
              deleteTodo={deleteTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
