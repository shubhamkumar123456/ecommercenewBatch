// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// const Home = (props) => {

//   const [Allproducts, setAllproducts] = useState([]); 
//     console.log(Allproducts)

//   const getData = async()=>{
//     let res = await fetch('https://dummyjson.com/products?limit=0'); // it is not in proper jS object form
//     let data =await res.json();
//     console.log(data)
//     // console.log(data.products) //[30]
    
//     setAllproducts(data.products)
//   }


//   useEffect(()=>{
//     getData()
//   },[])


//   const handleAdd = (obj , i)=>{
//     // console.log(obj)
//    props.getData(obj)
//   }

//   return (
//     <div  id='homePage' className=' px-3  '>
//       {/* <h1>This is Home page</h1> */}

//       <div className='grid w-[90%] mx-auto gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
//       {
//       Allproducts.map((ele, i)=>{
//         return  <div className='homeCard text-center  text-black  rounded-md flex flex-col gap-2 justify-between p-3'>
//               <img src={ele.thumbnail} alt="" />
//               <p className='font-bold'>{ele.title} </p>
//               {/* {ele.discountPercentage} */}
//               <p>{ele.price}  </p>
//               <button onClick={()=>handleAdd(ele , i)} className='bg-[#1F2937] hover:bg-[#303f56] w-full px-2 py-2 rounded'>Add to Cart</button>
//               <Link to={'/view'} state={ele} className='bg-[#145F30] hover:bg-[#4a6e57] text-center text-white w-full px-2 py-2 rounded'>View Details</Link>
//         </div>
//       })
//     }
//       </div>

  

//     </div>
//   )
// }

// export default Home



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SliderComponent from '../components/SliderComponent';
import CategorySliders from '../components/CategorySliders';


const Home = () => {
  // 'https://dummyjson.com/products'

  const [allItems, setallItems] = useState([]);
  console.log(allItems)

  async function getData(){

    let res =await fetch('https://dummyjson.com/products?limit=0&skip=0')
    let data = await res.json();
    console.log(data)
    console.log(data.products)  //[{},{},{},..... 30]
    setallItems(data.products)
  }

 
  useEffect(()=>{
    getData()
  },[])



  let smartPhones = allItems.filter((ele)=>ele.category === 'smartphones' )     // []
  let laptops = allItems.filter((ele)=>ele.category === 'laptops' )     // []
  let watches = allItems.filter((ele)=>ele.category.includes('watch') )     // []
  console.log(smartPhones)
  console.log(laptops)
  console.log(watches)



  return (
    <div>
        <SliderComponent/>
        <div className='my-4'>
          <h1>Smartphones</h1>
          <CategorySliders smartPhones = {smartPhones}/>
        </div>
        <div className='my-4'>
          <h1>Laptops</h1>
        <CategorySliders smartPhones = {laptops}/>

        </div>

        <div className='my-4'>
          <h1>Watches</h1>
        <CategorySliders smartPhones = {watches}/>
        </div>
      <div className='grid grid-cols-4 gap-2 w-[90%] m-auto'>
    
   {/* bg-[rgb(255,255,255,0.5)] */}
      {
        allItems.map((ele,i)=>{
          return <div className='flex bg-[rgb(255,255,255,0.4)] backdrop-blur-sm text-black flex-col items-center gap-2 p-4 rounded-xl my-2'>
                <img src={ele.thumbnail} alt="" />
                <p>{ele.price}</p>
                <p>{ele.title}</p>
                <Link state={ele} to={'/view'} onClick={()=>console.log(ele)} className='bg-[#3b723b] text-center cursor-pointer hover:bg-[#6f826f] text-white rounded-md w-full py-2'>View Details</Link>
                <button className='bg-[#3b4072] cursor-pointer hover:bg-[#393a4b] text-white rounded-md w-full py-2'>Add to Cart</button>
          </div>
        })
      }
    </div>
    </div>
  )
}

export default Home
