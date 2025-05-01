import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {

    const [selectedImage, setselectedImage] = useState('');
    console.log("selectedImage=" , selectedImage)

    let location = useLocation();

    console.log(location)
    // console.log(location.state)

    let product = location.state
    console.log(product)


    const handleImage = (url , i)=>{
        console.log(url)
        setselectedImage(url)
        console.log(i)
    }

  return (
    <div>
        h1llo
      <div className='w-full h-[70vh] bg-green-400'>
        <div className='w-1/2 relative flex h-full bg-black'>
            <img className="w-full max-w-[320px] m-auto h-[70%]" src={selectedImage?selectedImage : product.thumbnail} alt="" />
            <div className='flex h-full  flex-col absolute left-0 top-0 gap-2'>
                {
                    product.images.map((url, i)=>{
                        return <img onClick={()=>handleImage(url , i)} className='border border-[#989898] rounded-md cursor-pointer w-full h-full max-w-[100px] max-h-[100px]' key={url} src={url} alt="" />
                    })
                }
            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ViewDetails
