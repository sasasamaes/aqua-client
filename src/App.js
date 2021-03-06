import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import ModelPage from './pages/modelPage'
import AboutUsPage from './pages/aboutUsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/model/:id" element={<ModelPage />} />
      <Route path="/about-us/:id" element={<AboutUsPage />} />
    </Routes>
  )
}

export default App
