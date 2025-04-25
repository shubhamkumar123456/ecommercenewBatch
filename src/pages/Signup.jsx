import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [userDetails, setuserDetails] = useState({
    name:'',
    email:'',
    password:''
  });



  const handleChanger = (e)=>{
    // console.log(e.target) // email input
    // console.log(e.target.value) // s
    // console.log(e.target.name) // email

    setuserDetails( {...userDetails , [e.target.name] : e.target.value })  
   

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(userDetails)
  }
  return (
    <div className='w-full flex md:flex-row flex-col  px-5 justify-center gap-4 items-center h-full bg-[url(https://cdn.pixabay.com/photo/2018/09/21/07/07/e-commerce-3692440_1280.jpg)]  bg-center bg-cover'>

      <div>
        <h1 style={{backgroundClip:'text'}} className='lg:text-4xl md:text-start text-center md:text-2xl text-transparent font-bold lg:w-[500px] md:w-[350px] bg-linear-to-r from-[goldenrod] to-[black]'> Exclusive Offers Await Create Your Account Today!</h1>
      </div>
    
      <form  action="" className=' signupForm lg:w-[400px] md:w-[300px] h-max p-5 bg-transparent shadow-lg rounded-2xl flex gap-3 flex-col'>
          {/* <img src="https://www.citypng.com/public/uploads/preview/black-shopify-ecommerce-logo-701751694791307pvl6xyyal3.png"  className='w-24  m-auto' alt="" /> */}
          <h3 className='text-center lg:text-xl md:text-md font-semibold'>Ecommerce Signup</h3>
        <label htmlFor="">Name</label>
        <input onChange={handleChanger} name='name' className='rounded-md outline-none border border-yellow-300 px-4 py-2' type="text" placeholder='enter your name' />
        <label htmlFor="">Email</label>
        <input onChange={handleChanger} name='email' className='rounded-md outline-none border border-yellow-300 px-4 py-2' type="email"  placeholder='enter your email'/>
        <label htmlFor="">Password</label>
        <input  onChange={handleChanger} name='password'className='rounded-md outline-none border border-yellow-300 px-4 py-2' type="password" placeholder='enter your password'/>
        <button onClick={handleSubmit} className='bg-green-500 hover:bg-green-700 cursor-pointer hover:text-white py-2 rounded-md'>Signup</button>

        <p className='text-center '>Already have an account? <Link className='text-blue-700' to={'/login'}>Login</Link></p>
      </form>
    
 
     

    </div>
  )
}

export default Signup
