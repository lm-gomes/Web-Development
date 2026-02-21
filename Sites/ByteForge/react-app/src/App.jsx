import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/main/Header.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/main/MainSection.jsx'
import About from './pages/about/AboutSection.jsx'

function App() {

  return (


      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App
