import React from 'react'
import Banner from '../assets/banner.jpg'

const Hero = () => {
  return (
    <>
        <div className='max-w-[1200px] mx-auto container px-4 min-h-[50vh] flex items-center'>
            <h1 className='w-3/2 mx-auto text-white text-4xl sm:text-7xl uppercase font-bold text-center'>
                <span>Watch</span> and Save Your Favorites <span>Anime</span>
            </h1>
        </div>
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.3)), url(${Banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className='h-[100vh] mt-[-10%] z-10'>
            <div className='relative h-full'>
                <span style={{animationDelay: '1s'}} className='horizontal bg-transparent border border-white text-white px-6 py-1 rounded-lg text-lg font-semibold absolute shadow-sm shadow-white top-[25%] left-[20%]'>Scrapping</span>
                <span style={{animationDelay: '1.5s'}} className='horizontal bg-white px-6 py-1 rounded-lg text-lg font-semibold absolute shadow-sm shadow-white top-[50%] right-[20%]'>Anime</span>
                <span style={{animationDelay: '2s'}} className='horizontal bg-white px-6 py-1 rounded-lg text-lg font-semibold absolute shadow-sm shadow-white top-[75%] left-[15%]'>Undefined</span>
                <span style={{animationDelay: '0.5s'}} className='horizontal bg-transparent border border-white text-white px-6 py-1 rounded-lg text-lg font-semibold absolute shadow-sm shadow-white top-[90%] right-[15%]'>API</span>
            </div>
        </div>
    </>
  )
}

export default Hero