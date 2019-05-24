import React, { useState, useEffect } from 'react'
import Home from './pages/home'
import './App.css'

const App = () => {
  const [wizards, setWizards] = useState([])

  useEffect(() => {
    const apiSuperSecretKey = process.env.REACT_APP_API_KEY

    fetch(`https://www.potterapi.com/v1/characters?key=${apiSuperSecretKey}`)
        .then(res => res.json())
        .then(characters => setWizards({ wizards: characters }))
  }, [])

  return <Home characters={wizards} />
}

export default App
