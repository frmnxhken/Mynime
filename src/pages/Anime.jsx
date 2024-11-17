import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import ListItem from '../components/ListItem'
import { LIST_ANIME } from '../utils/Endpoint'
import Container from '../components/Container'
import HeroImage from '../assets/hero.jpg'

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
      <div style={{
         background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${HeroImage})`,
         backgroundPosition: 'center',
         backgroundSize: 'cover'
      }}>
        <Container>
          <div className='min-h-[50vh] flex flex-col justify-center'>
            <h1 className='text-white w-3/4 mx-auto text-2xl sm:text-4xl font-bold text-center'>
              Discovery Anime
            </h1>
            <div className='w-[80%] sm:w-1/2 mx-auto py-6'>
              <Input onInput={(e) => setKeyword(e.target.value)} placeholder="Search Anime.." />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className='py-12 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
          {filteredAnime.map((anime, index) => (
            <ListItem key={index} id={anime.id} name={anime.anime} />
          ))}
        </div>
      </Container>
    </>
  )
}

export default Anime