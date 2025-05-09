import React from 'react'
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block",position:'absolute',right:0, background: "red" }}
    //   onClick={onClick}
    // />
     <div className='w-20 h-full bg-[rgb(0,0,0,0.3)] flex justify-center items-center absolute left-2 z-50 top-[50%] -translate-y-[50%]'>
     <MdKeyboardArrowLeft onClick={onClick} className='text-white' size={50} />
     
   </div>
);
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
   
   <div onClick={onClick} className='w-20 h-full bg-[rgb(0,0,0,0.3)]  flex justify-center items-center absolute right-0 z-50 top-[50%] -translate-y-[50%]'>
     <MdKeyboardArrowRight  className=' text-white' size={50} />
   </div>
  );
}


const SliderComponent = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
     speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
   <div className="slider-container relative text-white  w-full mb-2 mt-[80px]">
      <Slider {...settings}>
        <div className='w-full h-[60vh]'>
          <img className='w-full h-full' src="https://storage.googleapis.com/shy-pub/389981/indan-grocery-1724788522112.jpeg" alt="" />
        </div>
        <div className='w-full h-[60vh]'>
         <img className='w-full h-full' src="https://udippi.com/images/Slides/Slides_1100X500/Grocery.webp" alt="" />
        </div>
        <div className='w-full h-[60vh]'>
          <img className='w-full h-full' src="https://static.vecteezy.com/system/resources/previews/004/948/401/non_2x/organic-shop-poster-finished-design-trolley-with-vegetables-vector.jpg" alt="" />
        </div>
        <div className='w-full h-[60vh]'>
        <img className='w-full h-full' src="https://eangadi.in/image/cache/catalog/grocery-banner-1140x330.jpg" alt="" />
        </div>
      
      </Slider>
    </div>
  )
}

export default SliderComponent
