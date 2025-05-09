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


const CategorySliders = (props) => {
    console.log(props.smartPhones)
      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };
  return (
    <div className="slider-container bg-[rgb(0,0,0,0.5)] text-white h-max py-5 text-center">
      <Slider {...settings}>
        {/* <div>
          <h3>1</h3>
        </div> */}

        {props.smartPhones.map((ele,i)=>{
            return <div className='h-full text-center flex flex-col items-center'>
                <img className='h-[40vh] m-auto' src={ele.thumbnail} alt="" />
                <p>{ele.title}</p>
            </div>
        })}
        
      </Slider>
    </div>
  )
}

export default CategorySliders
