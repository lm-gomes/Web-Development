import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/main/Header.jsx'
import Main from './pages/main/MainSection.jsx'

function App() {

  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App
