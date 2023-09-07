// import { useState } from 'react'
import './App.css'
import { LoginFondo } from './components/LoginFondo'
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path='/home-waiter' element={<prueba />} />

      </Routes>
      <LoginFondo />
      <Footer />
    </>
  )
}

export default App
