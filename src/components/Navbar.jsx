import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='max-w-[1200px] mx-auto container px-4 py-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-white text-xl font-semibold'>Mynime</h1>
                </div>
                <div className='text-white text-sm flex gap-x-12'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Animes</Link>
                    <Link to='/'>Schedule</Link>
                    <Link to='/'>Watchlist</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar