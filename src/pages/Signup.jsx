import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  let nameRef = useRef()
  let emailRef = useRef()
  let passwordRef = useRef()



  let dataBase = JSON.parse(localStorage.getItem('EcomSignup')) || [];
  console.log(dataBase)

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value

    }

    if (!obj.name || !obj.email || !obj.password) {
      return alert('please fill all the fields')
    }

    let ans = dataBase.find((ele) => ele.email === obj.email);

    if (ans) {
      return alert('user already registered')
    }
    else {
      dataBase.push(obj)
      console.log(dataBase)
      console.log(obj)

      localStorage.setItem('EcomSignup', JSON.stringify(dataBase))
    }

  }


  return (
    <div className='w-full flex md:flex-row flex-col  px-5 justify-center gap-4 items-center h-full bg-[url(https://cdn.pixabay.com/photo/2018/09/21/07/07/e-commerce-3692440_1280.jpg)]  bg-center bg-cover'>

      <div>
        <h1 style={{ backgroundClip: 'text' }} className='lg:text-4xl md:text-start text-center md:text-2xl text-transparent font-bold lg:w-[500px] md:w-[350px] bg-linear-to-r from-[goldenrod] to-[black]'> Exclusive Offers Await Create Your Account Today!</h1>
      </div>

      <form action="" className=' signupForm lg:w-[400px] md:w-[300px] h-max p-5 bg-transparent shadow-lg rounded-2xl flex gap-3 flex-col'>
        {/* <img src="https://www.citypng.com/public/uploads/preview/black-shopify-ecommerce-logo-701751694791307pvl6xyyal3.png"  className='w-24  m-auto' alt="" /> */}
        <h3 className='text-center lg:text-xl md:text-md font-semibold'>Ecommerce Signup</h3>
        <label htmlFor="">Name</label>
        <input ref={nameRef} required name='name' className='rounded-md outline-none border border-yellow-300 px-4 py-2' type="text" placeholder='enter your name' />
        <label htmlFor="">Email</label>
        <input ref={emailRef} required name='email' className='rounded-md outline-none border border-yellow-300 px-4 py-2' type="email" placeholder='enter your email' />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} required name='password' className='rounded-md outline-none border border-yellow-300 px-4 py-2' type="password" placeholder='enter your password' />
        <button onClick={handleSubmit} className='bg-green-500 hover:bg-green-700 cursor-pointer hover:text-white py-2 rounded-md'>Signup</button>

        <p className='text-center '>Already have an account? <Link className='text-blue-700' to={'/login'}>Login</Link></p>
      </form>




    </div>
  )
}

export default Signup
