import React from 'react'
import Header from './components/header'
import pfp from './assets/images/josh pfp.png'
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <img src={pfp} alt="" />
      <img src={pfp} alt="" />
      <img src={pfp} alt="" />
    </div>
  )
}

export default App
