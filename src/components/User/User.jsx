import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
 const {userid}= useParams()
  return (
    <div className='text-center bg-black text-white text-4xl'>user: {userid}</div>
  )
}

export default User