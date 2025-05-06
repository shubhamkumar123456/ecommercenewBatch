
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ViewDetails from './pages/ViewDetails'
import { useState } from 'react'

function App() {

  const [cartArr, setcartArr] = useState([]); //[{}]

  console.log(cartArr)

    function getData(ans){
      console.log(ans)  //obj {}
      ans.quantity = 1;

      let find = cartArr.find((ele)=>ele.id === ans.id);  // ele , undefined

      if(find){
        return alert('item already exists');
      }



      let copyArr = [...cartArr]
      copyArr.push(ans)
      setcartArr(copyArr)
      alert('item added successfully')

      // setcartArr([...cartArr , ans])  // [{},{bed}]
    }

  return (
    <>
     <BrowserRouter>
     <div className='mb-[65px]'>
     <Navbar cartArr={cartArr}/>
     </div>
 
        <Routes>
              <Route path='/'  element = {<Home getData={getData}/>}/>
              <Route path='/login'  element = {<Login/>}/>
              <Route path='/register'  element = {<Signup/>}/>
              <Route path='/cart'  element = {<Cart cartArr={cartArr} setcartArr={setcartArr}  x = {{arr:cartArr , update:setcartArr}}/>}/>
              <Route path='/view'  element = {<ViewDetails/>}/>
        </Routes>
    
     </BrowserRouter>

    </>
  )
}

export default App
