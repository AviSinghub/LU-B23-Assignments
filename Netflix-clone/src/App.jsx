import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Netflix from './pages/Netflix'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Player from './pages/Player'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element ={<Signup/>} />
        <Route exact path="/login" element ={<Login/>} />
        <Route exact path="/" element ={<Netflix />} />
        <Route eaxct path="/player" element ={<Player/>}/>
      </Routes>
    </BrowserRouter>
  )
}
