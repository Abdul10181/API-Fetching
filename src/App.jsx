import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Card } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Products from './pages/Products'
import ViewProducs from './pages/ViewProducs'
import Pnf from './pages/Pnf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<LandingPage/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/viewproduct/:id' element={<ViewProducs/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
