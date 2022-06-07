import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center p-4 absolute top-0 z-[100]'>
        <h1 className='text-3xl text-red-600 uppercase font-bold cursor-pointer'>Netflix</h1>
        <div>
            <button className='py-2 px-4 text-white cursor-pointer'>Sign In</button>
            <button className='py-2 px-4 text-white ml-4 cursor-pointer bg-red-600 rounded'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar