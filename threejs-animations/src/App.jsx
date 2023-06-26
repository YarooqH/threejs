import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import StarTextView from './pages/Stars'
import GalleryView from './pages/Gallery';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StarTextView/>} />
          <Route path='/gallery' element={<GalleryView/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
