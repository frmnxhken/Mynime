import React from 'react'
import { useNavigate } from 'react-router-dom'

const Episode = (props) => {
  const navigate = useNavigate();

  const handleStream = () => {
    document.documentElement.requestFullscreen()
    navigate(`/stream/${props.id}`)
  }

  return (
    <div onClick={handleStream} className='border-[1.5px] border-gray-600 px-4 py-4 text-white hover:bg-white hover:text-black cursor-pointer rounded-md'>
        <p className='text-sm sm:text-md'>{props.episode.split("Episode").splice(1, 2)}</p>
    </div>
  )
}

export default Episode