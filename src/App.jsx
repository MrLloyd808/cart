import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './Components/Products'
import Cart from './Cart'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
