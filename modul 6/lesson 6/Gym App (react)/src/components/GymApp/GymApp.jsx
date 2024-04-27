import React, { useState } from 'react'
import MemberForm from '../Member/MemberForm'
import Navbar from '../Navbar/Navbar'
import Card from '../Cards/Card'

function GymApp() {
  const GymDate = () => {
    const [Data, setDate] = useState([])
  }

  return (
    <div>
      <Navbar />
      <MemberForm />
      <Card />
    </div>
  )
}
export default GymApp
