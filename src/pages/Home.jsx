import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [Allproducts, setAllproducts] = useState([]); 
    console.log(Allproducts)

  const getData = async()=>{
    let res = await fetch('https://dummyjson.com/products?limit=0'); // it is not in proper jS object form
    let data =await res.json();
    console.log(data)
    // console.log(data.products) //[30]
    setAllproducts(data.products)
  }


  useEffect(()=>{
    getData()
  },[])


  const handleDelete = (obj , i)=>{
    console.log(obj)
    console.log(i)
  }

  return (
    <div  id='homePage' className=' px-3  '>
      <h1>This is Home page</h1>

      <div className='grid w-[90%] mx-auto gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
      {
      Allproducts.map((ele, i)=>{
        return  <div className='homeCard  text-black  rounded-md flex flex-col gap-2 justify-between p-3'>
              <img src={ele.thumbnail} alt="" />
              <p className='font-semibold'>{ele.title}</p>
              <p>{ele.price}</p>
              <button onClick={()=>handleDelete(ele , i)} className='bg-blue-500 w-full px-2 py-2 rounded'>Add to Cart</button>
              <Link to={'/view'} state={ele} className='bg-green-500 text-center w-full px-2 py-2 rounded'>View Details</Link>
        </div>
      })
    }
      </div>

  

    </div>
  )
}

export default Home
