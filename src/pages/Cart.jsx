import React from 'react'

const Cart = (props) => {
  console.log(props.cartArr)
  return (
    <div>
        <div className='container justify-center  flex gap-2'>
          <div className='bg-black p-5'>
            <h1 className='border-b'>Cart</h1>
              {
                props.cartArr.map((ele, i)=>{
                  return <div className='flex justify-between my-6  text-white items-center'>
                      <div className='flex'>
                        <img src={ele.thumbnail} className='w-25 h-25 ' alt="" />
                          <div>
                              <h1>{ele.title}</h1>
                              <button className='text-red-400 my-1'>remove</button>
                              <div className='flex my-1 gap-2 items-center'>
                                <button className='bg-[#3e3c3c]'>-</button>
                                  <span className='text-sm'>{ele.quantity}</span>
                                <button className='bg-[#3e3c3c]'>+</button>
                              </div>
                          </div>
                      </div>

                      <div>{ele.price}</div>
                  </div>
                })
              }
          </div>

          <div></div>
        </div>
    </div>
  )
}

export default Cart
