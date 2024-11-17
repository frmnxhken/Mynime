import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { STREAM } from '../utils/Endpoint'

const Stream = () => {
    const params = useParams()
    const id = params.id

    const [stream, setStream] = useState('')

    useEffect(() => {
        fetch(STREAM + id).then(r => r.json())
        .then((response) => {
            setStream(response.stream)
        })
    }, [id])
  return (
    <>
        <iframe src={stream} frameborder="0" className='w-full h-full'></iframe>
    </>
  )
}

export default Stream