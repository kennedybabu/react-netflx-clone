import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({ fetchURL, title, rowId }) => {
    const [movies, setMovies] = useState([])
    const [like, setLike] = useState(false)

    const likeHandler = () => setLike(!like)

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='text-4xl bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                   <Movie item={item} likeHandler={likeHandler} like={like} key={id}/>                   
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='text-4xl bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
    </>
  )
}

export default Row