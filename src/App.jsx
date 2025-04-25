
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar/>
        <main className='h-[calc(100vh-65px)] mt-[65px]'>
        <Routes>
              <Route path='/'  element = {<Home/>}/>
              <Route path='/login'  element = {<Login/>}/>
              <Route path='/register'  element = {<Signup/>}/>
              <Route path='/cart'  element = {<Cart/>}/>
        </Routes>
        </main>
     </BrowserRouter>

    </>
  )
}

export default App
