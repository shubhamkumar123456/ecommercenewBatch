import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div className='w-full flex md:flex-row flex-col  px-5 justify-center gap-4 items-center h-full bg-[url(https://cdn.pixabay.com/photo/2018/09/21/07/07/e-commerce-3692440_1280.jpg)]  bg-center bg-cover'>

      <div>
        <h1 style={{backgroundClip:'text'}} className='lg:text-4xl md:text-start text-center md:text-2xl text-transparent font-bold lg:w-[500px] md:w-[350px] bg-linear-to-r from-[goldenrod] to-[black]'> Exclusive Offers Await Login to Your Account Today!</h1>
      </div>
    
      <form action="" className=' lg:w-[400px] md:w-[300px] h-max p-5 bg-[white] shadow-lg rounded-2xl flex gap-3 flex-col'>
          {/* <img src="https://www.citypng.com/public/uploads/preview/black-shopify-ecommerce-logo-701751694791307pvl6xyyal3.png"  className='w-24  m-auto' alt="" /> */}
          <h3 className='text-center lg:text-xl md:text-md font-semibold'>Ecommerce Login</h3>
      
        <label htmlFor="">Email</label>
        <input className='rounded-md outline-none border border-yellow-300 px-4 py-2' type="email"  placeholder='enter your email'/>
        <label htmlFor="">Password</label>
        <input className='rounded-md outline-none border border-yellow-300 px-4 py-2' type="password" placeholder='enter your password'/>
        <button className='bg-green-500 hover:bg-green-700 cursor-pointer hover:text-white py-2 rounded-md'>Signup</button>

        <p className='text-center '>Don't have an account? <Link className='text-blue-700' to={'/register'}>register</Link></p>
      </form>
    
 
     

    </div>
  )
}

export default Login
