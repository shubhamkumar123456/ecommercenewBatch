import React, { useEffect, useRef, useState } from 'react'

const Otp = () => {
    let input1 = useRef()
    let input2 = useRef()
    let input3 = useRef()
    let input4 = useRef()
    let input5 = useRef()


    const [arr, setArr] = useState(['','','','','']);
    const [count, setcount] = useState(1);



    const handleChanger = (e)=>{

        
      
    }

    useEffect(()=>{
        // input1.current.focus()
    },[])
  return (
    <div className='h-[400px] flex justify-center items-center'>
      <div className='flex gap-2'>
        {
            arr.map((ele,i)=>{
                return <input placeholder='0' className='border' ref={'input'} />
            })
        }
      </div>
    </div>
  )
}

export default Otp
