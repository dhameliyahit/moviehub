import React from 'react'
import { Link } from 'react-router-dom'

const FOF = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-mono my-4 shadow-lg p-3 '>404 | Page Not Found</h1>
        <Link to={"/"}>
            <button className='border py-3 px-9 bg-blue-700 text-white text-xl hover:rounded-xl' >Go Back</button>
        </Link>
    </div>
  )
}

export default FOF