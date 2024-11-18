import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Anime from './pages/Anime'
import Layout from './pages/Layout'
import Detail from './pages/Detail'
import Stream from './pages/Stream'
import Watchlist from './pages/Watchlist'
import Schedule from './pages/Schedule'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/animes' element={<Anime/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Route>
        <Route path='/stream/:id' element={<Stream/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App