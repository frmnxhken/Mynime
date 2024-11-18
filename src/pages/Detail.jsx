import React, { useEffect, useState } from 'react'
import InfoDetail from '../components/InfoDetail'
import Container from '../components/Container'
import { useParams } from 'react-router-dom'
import { LIST_ANIME } from '../utils/Endpoint'
import Episode from '../components/Episode'

const Detail = () => {
  const params = useParams()
  const id = params.id

  const [information, setInformation] = useState({})
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    fetch(`${LIST_ANIME}/${id}`).then(r => r.json())
    .then((response) => {
      setInformation(response.informations)
      setEpisodes(response.episodes)
    })
  }, [id])


  return (
    <>
      <Container>
          <div className='flex flex-col sm:flex-row justify-between py-12 gap-x-24 gap-y-12'>
              <div className='w-full sm:w-[60%]'>
                <div className='block sm:sticky top-0 sm:top-[7%]'>
                  <InfoDetail id={id} information={information}/>
                </div>
              </div>
              <div className='w-full sm:w-[40%] space-y-2'>
                <h1 className='text-xl font-semibold mb-4 px-2'>List Episode</h1>
                {episodes.map((ep, index) => (
                  <Episode key={index} 
                    id={ep.id} 
                    episode={ep.episode}/>
                ))}
              </div>
          </div>
      </Container>
    </>
  )
}

export default Detail