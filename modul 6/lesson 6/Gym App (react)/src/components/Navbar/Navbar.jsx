import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="bg-[#66DDAA]">
      <div className="container mx-auto flex justify-between px-2 py-4 items-center">
        <div className="logo">
          <FontAwesomeIcon className="text-lg" icon={faDumbbell} />
        </div>
        <ul className="menu flex gap-3">
          <li>
            <a
              href="#"
              className="py-1 px-3 border-2 border-red-600 hover:bg-[#ff0000] transition ease-in-out delay-350  hover:scale-110  duration-300  "
            >
              Members
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-1 px-3 border-2 border-red-600 hover:bg-[#ff0000] transition  ease-in-out delay-350  hover:scale-110  duration-300  "
            >
              Membership
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-1 px-3 border-2 border-red-600 hover:bg-[#ff0000] transition ease-in-out delay-350  hover:scale-110  duration-300  "
            >
              Add Member
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
