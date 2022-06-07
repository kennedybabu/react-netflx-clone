import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {
  const [movies , setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]


  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  const truncateStr = (str, num ) => {
    if(str?.length > num ) {
      return str.slice(0, num) + '...'      
    } else {
      return str
    }
  }

  
  return (
    <div className='w-full text-white h-[550px]'>
      <div className='h-[550px] w-full absolute bg-gradient-to-r from-black'></div>
      <div className='w-full h-full'>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
          <div className='absolute w-full h-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl font-bold md:text-5xl '>{movie?.title}</h1>
            <div className='my-4'>
                <button className='border bg-gray-300 text-black py-2 px-5'>Play</button>
                <button className='border text-white py-2 px-5 ml-4'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
            <p className='w-100% md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateStr(movie?.overview, 150)}</p>
          </div>
      </div>    
      <div>

      </div>    
    </div>
  )
}

export default Main