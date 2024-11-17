import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const location = useLocation();
    
    const navigations = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Animes',
            path: '/animes'
        },
        {
            name: 'Schedule',
            path: '/schedule'
        },
        {
            name: 'Watchlist',
            path: '/watchlist'
        },
    ]
    return (
        <>
            <nav className='hidden sm:block'>
                <div className='max-w-[1200px] mx-auto container px-4 py-6'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-white text-xl font-semibold'>Mynime</h1>
                        </div>
                        <div className='text-white text-sm flex gap-x-12'>
                            {navigations.map((nav, index) => (
                                <Link to={nav.path}>{nav.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            
            <div
                className={`bg-[#0A0F15] text-white sticky top-0 z-[999] flex sm:hidden w-full p-6 justify-between items-center`}
            >
                <h1 className="text-lg font-semibold">Mynime</h1>
                <div
                    onClick={() => setActive(!active)}
                    className={`flex flex-col gap-y-1 cursor-pointer ${active ? "hamburger active" : "hamburger"
                        }`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div
                className={`fixed z-[99] block sm:hidden ${active ? "top-0" : "top-[-100%]"
                    } transition-all w-full bg-[#0A0F15] min-h-screen`}
            >
                <div className="px-4 py-12 h-screen flex flex-col justify-around">
                    <ul className="flex flex-col justify-around h-1/3 gap-y-6 px-6">
                        {navigations.map((nav, index) => (
                            <li key={index}>
                                <Link onClick={() => setActive(!active)} to={nav.path} 
                                className={`${nav.path === location.pathname ? "text-3xl font-semibold text-white" : "text-2xl text-slate-300"}`}>{nav.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar