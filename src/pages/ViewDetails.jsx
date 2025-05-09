import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ViewDetails = () => {



  const [selectedImage, setselectedImage] = useState('');
  console.log("selectedImage=", selectedImage)

  let location = useLocation();

  console.log(location)
  // console.log(location.state)

  let product = location.state
  console.log(product)


  const handleImage = (url, i) => {
    console.log(url)
    console.log(i)
    setselectedImage(url)
  }



  return (
    <div>

      <div className='w-[90%] m-auto mt-[100px] p-8 rounded-xl flex lg:flex-row flex-col  h-max viewDetailsCard'>
        <div className='lg:w-1/2 min-w-[450px] w-full m-auto relative flex h-full '>
          <img className="w-full max-w-[320px] m-auto h-[70%]" src={selectedImage || product.thumbnail} alt="" />
          <div className='flex h-full  flex-col absolute left-0 top-0 gap-2'>
            {
              product.images.map((url, i) => {
                return <img onClick={() => handleImage(url, i)} className='border border-[#989898] rounded-md cursor-pointer w-full h-full max-w-[70px] max-h-[70px]' key={url} src={url} alt="" />
              })
            }
          </div>
        </div>
        <div className='flex flex-col gap-2 h-max'>
          <h1 className='font-semibold text-xl'>{product.title}</h1>
          <p> <b>Price:</b> {product.price}</p>
          <p className='flex items-center'> <b>rating:</b>
            {/* <IoMdStar color='yellow'/>   <IoMdStarHalf color='yellow'/> */}

            {
              Array(Math.floor(product.rating)).fill('0').map((ele, i) => {
                return <IoMdStar color='yellow' />

              })
            }
            {Math.ceil(product.rating) - product.rating > 0 && <IoMdStarHalf color='yellow' />}
          </p>
          <p> <b>Category:</b> {product.category}</p>
          <p> <b>Brand:</b> {product.brand}</p>
          <p> <b>Discount:</b> {product.discountPercentage}</p>
          <p> <b>Minimum Order Quantity:</b> {product.minimumOrderQuantity}</p>
          <p> <b>Warranty:</b> {product.warrantyInformation}</p>
          <p> <b>Return:</b> {product.returnPolicy}</p>
          <p> <b>Description:</b> {product.description}</p>

          <div className='h-max p-3'>
            <Accordion className='' id="accordion" >
              <AccordionSummary
                expandIcon={<IoIosArrowDown color='white' />}
                aria-controls="panel1-content"

              >
                <Typography component="span">more</Typography>
              </AccordionSummary>
              <AccordionDetails className='z-50 relative'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>


      <div className='w-[90%] my-2 mx-auto  viewDetailsCard'>
        <Accordion id="accordion1">
          <AccordionSummary  expandIcon={<IoIosArrowDown color='white' />}>
            Reviews
          </AccordionSummary>

          <AccordionDetails>
            <div className='flex justify-center gap-3'>
              {
                product.reviews.map((item, i) => {
                  return <div className=' p-5 border rounded w-max my-2'>
                    <p>Name: {item.reviewerName}</p>
                    <p>Email: {item.reviewerEmail}</p>
                    <p>Date: {item.date}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Comment: {item.comment}</p>
                  </div>
                })
              }
            </div>
          </AccordionDetails>
        </Accordion>

      </div>

    </div>
  )
}

export default ViewDetails


// import React from 'react'
// import { useLocation } from 'react-router-dom'

// const ViewDetails = () => {


//   // location hook apko ek object deta hai jisme multiple keys and value hoti hai jisme apka path and state bhi hota hai
//   let location = useLocation()
//   console.log(location)
//   console.log(location.state)

//   return (
//     <div>
//       <h1>This is view page</h1>
//     </div>
//   )
// }

// export default ViewDetails

