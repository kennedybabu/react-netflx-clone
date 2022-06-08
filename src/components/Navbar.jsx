import React from 'react'
import { Link } from 'react-router-dom'
import  { UserAuth} from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  console.log(user)

  return (
    <div className='w-full flex justify-between items-center p-4 absolute top-0 z-[100]'>
      <Link to='/'>
          <h1 className='text-3xl text-red-600 uppercase font-bold cursor-pointer'>Netflix</h1>
      </Link>
        <div>
          <Link to='/login'>
               <button className='py-2 px-4 text-white cursor-pointer'>Sign In</button>
          </Link>
          <Link to='/signup'>
                <button className='py-2 px-4 text-white ml-4 cursor-pointer bg-red-600 rounded'>Sign Up</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar