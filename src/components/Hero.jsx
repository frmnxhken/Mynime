import React from 'react'
import HeroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <>
        <div className='max-w-[1200px] mx-auto container px-4 min-h-[50vh] flex items-center'>
            <h1 className='w-3/2 mx-auto text-4xl sm:text-7xl uppercase font-bold text-center'>
                Watch and Save Your Favorites Anime
            </h1>
        </div>
        <div style={{
            background: `url(${HeroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className='h-[100vh] z-10'>
            <div className='relative h-full'>
                <span style={{animationDelay: '1s'}} className='horizontal bg-white px-6 py-1 rounded-lg text-lg font-semibold absolute shadow-sm top-[25%] left-[10%]'>Scrapping</span>
                <span style={{animationDelay: '1.5s'}} className='horizontal bg-white px-6 py-1 rounded-lg text-lg font-semibold absolute top-[40%] right-[15%]'>Anime</span>
                <span style={{animationDelay: '2s'}} className='horizontal bg-white px-6 py-1 rounded-lg text-lg font-semibold absolute top-[60%] left-[25%]'>Undefined</span>
                <span style={{animationDelay: '0.5s'}} className='horizontal bg-white px-6 py-1 rounded-lg text-lg font-semibold absolute top-[75%] right-[25%]'>Streaming</span>
            </div>
        </div>
    </>
  )
}

export default Hero