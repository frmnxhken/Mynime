import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import ListItem from '../components/ListItem'
import { LIST_ANIME } from '../utils/Endpoint'
import Container from '../components/Container'

const Anime = () => {
  const [animes, setAnimes] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    fetch(LIST_ANIME).then(r => r.json())
    .then((response) => {
        setAnimes(response.data)
      })
    }, [])
   
  const filteredAnime = animes.filter((anime) =>
    anime.anime.toLowerCase().includes(keyword.toLowerCase()))
    

  return (
    <>
      <Container>
        <div className='min-h-[50vh] flex flex-col justify-center'>
          <h1 className='w-3/4 mx-auto text-white text-2xl sm:text-4xl font-bold text-center'>
            Discovery Anime
          </h1>
          <div className='w-3/4 sm:w-1/2 mx-auto py-6'>
            <Input onInput={(e) => setKeyword(e.target.value)} placeholder="Search Anime.." />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
          {filteredAnime.map((anime, index) => (
            <ListItem key={index} id={anime.id} name={anime.anime} />
          ))}
        </div>
      </Container>
    </>
  )
}

export default Anime