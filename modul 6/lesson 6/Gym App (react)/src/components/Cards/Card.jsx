import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Card() {
  return (
    <div className=" w-[400px] bg-[#66DDAA]">
      <div className="container flex">
        <div className="image w-[150px] flex items-center align-center">
          <FontAwesomeIcon
            className="text-lg w-full text-[100px]"
            icon={faUser}
          />
        </div>
        <div className="memberInfo p-[20px] ">
          <h1 className="text-lg font-bold mb-1">Nurzod</h1>
          <p className="text-lg font-medium mb-1">
            Age - <span className="font-light">23</span>
          </p>
          <p className="text-lg font-medium mb-1">
            Birthday - <span className="font-light">12-09-2000</span>
          </p>
          <p className="text-lg font-medium mb-1">
            Adress - <span className="font-light">Samarkand</span>
          </p>
          <p className="text-lg font-medium mb-1">
            Number - <span className="font-light">998909909090</span>
          </p>
          <p className="text-lg font-medium mb-1">
            Gender - <span className="font-light">male</span>
          </p>
          <div className="btns flex gap-3 mb-1">
            <button className="px-3 py-1 border-2 border-red-600">
              Delete
            </button>
            <button className="px-3 py-1 border-2 border-blue-600">Edit</button>
            <button className="px-3 py-1 border-2 border-green-600">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
