import React from 'react'

const ListItem = (props) => {
  return (
    <div className='border-[1.5px] border-gray-600 px-4 py-4 sm:py-2 text-white hover:bg-white hover:text-black cursor-pointer'>
        <p className='text-sm sm:text-md'>{props.name}</p>
    </div>
  )
}

export default ListItem