import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, logIn} =UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }
  return (
    <div>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/ffd3a3f8-fbe2-4a76-ad9a-9e11fdbaf8c8/KE-en-20220530-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
            <div className='bg-black/60 fixed h-screen w-full top-0 left-0'></div>
            <div className='w-full fixed px-4 py-24 z-50'>
                <div className='max-w-[450px]  h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        {error ? <p className='p-3 bg-red-500 my-2'>{error}</p> : null}
                        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email"  placeholder='Email' autoComplete='email'/>
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input type="checkbox" className='mr-2'/>Remember Me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600 mr-2'>New to Netflix?</span> 
                            <Link to='/signup'>
                                Sign Up
                            </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login