import React from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = (props) => {
    const navigate = useNavigate();
  return (
    <div className='px-4 py-2 border-b border-gray-300 flex items-baseline justify-between'>
        <p className='text-sm'>{props.name}</p>
        <div className='flex space-x-2'>
            <button onClick={() => navigate(`/detail/${props.id}`)} className='text-xs text-gray-500'>Tonton</button>
            <button onClick={() => props.onDelete(props.index)} className='text-xs text-gray-500'>Delete</button>
        </div>
    </div>
  )
}

export default Todo