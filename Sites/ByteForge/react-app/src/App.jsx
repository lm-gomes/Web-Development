import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/main/Header.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/main/MainSection.jsx'
import About from './pages/about/AboutSection.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/login/Register.jsx'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App
