import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
   <div className='fixed top-0 right-0 left-0'>
     <div className='w-full relative  bg-linear-to-r to-yellow-200  via-yellow-400 from-yellow-600 px-10 justify-between items-center flex h-[65px] '>
        <h1 className='text-2xl text-white font-semibold'>E-commerce</h1>

        <ul className='lg:flex hidden gap-10 items-center'>
            <li><Link to={'/'}>Home</Link> </li>
            <li><Link to={'/cart'}>Cart</Link> </li>
            <li className='bg-blue-400 px-4 rounded-md hover:bg-blue-600 hover:text-white py-2'><Link to={'/login'}>Login</Link> </li>
            <li className='bg-green-400 px-4 rounded-md hover:bg-green-600 hover:text-white py-2'><Link to={'/register'}>Signup</Link> </li>
        </ul>
       { showSidebar && <ul className=' flex-col flex w-[200px] gap-10 items-center h-screen absolute top-0 left-0 bg-[rgb(0,0,0,0.6)] text-white'>
            <li className='text-2xl mt-4 ps-4'><Link to={'/'}>E-commerce</Link> </li>
            <li><Link to={'/'}>Home</Link> </li>
            <li><Link to={'/cart'}>Cart</Link> </li>
            <li className='bg-blue-400 px-4 rounded-md hover:bg-blue-600 hover:text-white py-2'><Link to={'/login'}>Login</Link> </li>
            <li className='bg-green-400 px-4 rounded-md hover:bg-green-600 hover:text-white py-2'><Link to={'/register'}>Signup</Link> </li>
        </ul>}

        <CiMenuFries onClick={()=>setshowSidebar(!showSidebar)} size={30} className='lg:hidden block' />
    </div>
   </div>
  )
}

export default Navbar
