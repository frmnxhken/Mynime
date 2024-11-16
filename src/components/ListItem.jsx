import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListItem = (props) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/detail/${props.id}`)} className='rounded-md border-[1.5px] border-gray-600 px-4 py-4 sm:py-2 text-white hover:bg-white hover:text-black cursor-pointer'>
        <p className='text-sm sm:text-md'>{props.name}</p>
    </div>
  )
}

export default ListItem