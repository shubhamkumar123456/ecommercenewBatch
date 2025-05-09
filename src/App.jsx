
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ViewDetails from './pages/ViewDetails'
import { useState } from 'react'
import Test from './pages/Test'
import Otp from './pages/Otp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {


  return (
    <>
     <BrowserRouter>
     <div className='mb-[65px]'>
     <Navbar />
     </div>
 
        <Routes>
              <Route path='/'  element = {<Home />}/>
              <Route path='/login'  element = {<Login/>}/>
              <Route path='/test'  element = {<Test/>}/>
              <Route path='/register'  element = {<Signup/>}/>
              <Route path='/cart'  element = {<Cart />}/>
              <Route path='/view'  element = {<ViewDetails/>}/>
              <Route path='/otp' element={<Otp/>}/>
        </Routes>
    
     </BrowserRouter>

    </>
  )
}

export default App
