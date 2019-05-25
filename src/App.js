import React, { useState, useEffect } from 'react'
import Home from './pages/home'
import './App.css'

const App = () => {
  const [wizards, setWizards] = useState([])

  useEffect(() => {
    const apiSuperSecretKey = "$2a$10$36rgllaRqvRVWeR..RyUOO9R0vMVZzIB1ZnXLA0gZu3J/Ipxv3edy"

    fetch(`https://www.potterapi.com/v1/characters?key=${apiSuperSecretKey}`)
      .then(res => res.json())
      .then(wizards => setWizards(wizards))
  }, [])

  return <Home wizards={wizards}/>
}

export default App
