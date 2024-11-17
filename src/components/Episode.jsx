import React from 'react'
import { useNavigate } from 'react-router-dom'

const Episode = (props) => {
  const navigate = useNavigate();

  const handleStream = () => {
    document.documentElement.requestFullscreen()
    navigate(`/stream/${props.id}`)
  }

  return (
    <div onClick={handleStream} className='bg-white border-[1.5px] border-gray-200 px-4 py-4 hover:bg-yellow-50 hover:text-black cursor-pointer rounded-md'>
        <p className='text-sm sm:text-md'>{props.episode.split("Episode").splice(1, 2)}</p>
    </div>
  )
}

export default Episode