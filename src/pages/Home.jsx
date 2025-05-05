import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = (props) => {

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


  const handleAdd = (obj , i)=>{
    // console.log(obj)
   props.getData(obj)
  }

  return (
    <div  id='homePage' className=' px-3  '>
      <h1>This is Home page</h1>

      <div className='grid w-[90%] mx-auto gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
      {
      Allproducts.map((ele, i)=>{
        return  <div className='homeCard text-center  text-black  rounded-md flex flex-col gap-2 justify-between p-3'>
              <img src={ele.thumbnail} alt="" />
              <p className='font-bold'>{ele.title} </p>
              {/* {ele.discountPercentage} */}
              <p>{ele.price}  </p>
              <button onClick={()=>handleAdd(ele , i)} className='bg-[#1F2937] hover:bg-[#303f56] w-full px-2 py-2 rounded'>Add to Cart</button>
              <Link to={'/view'} state={ele} className='bg-[#145F30] hover:bg-[#4a6e57] text-center w-full px-2 py-2 rounded'>View Details</Link>
        </div>
      })
    }
      </div>

  

    </div>
  )
}

export default Home
