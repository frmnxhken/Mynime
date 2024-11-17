import React from 'react'

const Input = (props) => {
  return (
    <>
        <input onChange={(val) => props.onInput(val)} className='border border-gray-200 outline-none w-full px-4 py-2 rounded-lg text-sm' placeholder={props.placeholder}/>
    </>
  )
}

export default Input