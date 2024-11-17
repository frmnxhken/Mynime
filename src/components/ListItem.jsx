import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListItem = (props) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/detail/${props.id}`)} className='bg-white rounded-md border-[1.5px] border-stone-200 px-4 py-4 sm:py-2 hover:bg-yellow-50 hover:text-black cursor-pointer'>
        <p className='text-sm sm:text-md'>{props.name}</p>
    </div>
  )
}

export default ListItem