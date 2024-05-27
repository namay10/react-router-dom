import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
  return (
    <div className='text-center text-white bg-black text-4xl rounded-lg'>Github:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
export const GitInfoLoader=async()=>{
    const res=await fetch("https://api.github.com/users/namay10")
    return res.json()
}