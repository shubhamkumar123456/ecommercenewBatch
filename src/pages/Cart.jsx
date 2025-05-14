import React from 'react'

const Cart = (props) => {
  console.log(props.cartArr)  //[{},{},{}]
  console.log(props)

  let sum = 0
  let totalDiscountPercentage = 0
  for(let i=0; i<props.cartArr.length; i++){
    // console.log(i)
    // console.log(props.cartArr[i].price)
    sum = sum+props.cartArr[i].price
    totalDiscountPercentage = totalDiscountPercentage +props.cartArr[i].discountPercentage
  }
  console.log(sum)  //
  console.log(totalDiscountPercentage)  //
  let discountInRuppes  = sum * totalDiscountPercentage /100;
  console.log(discountInRuppes)
  let shipping = sum * 5/100
  console.log(shipping)
  let tax = sum * 2/100
  console.log(tax)

  let finalTotal = sum -discountInRuppes +tax +shipping

  const handleIncrement = (obj,i)=>{
    console.log(obj)
    obj.price = obj.price + (obj.price /obj.quantity)
    obj.quantity = obj.quantity+1
    console.log(obj)
    // props.cartArr[i] = obj

    let copyArr = [...props.cartArr];
    copyArr[i] = obj

    props.setcartArr(copyArr)

  }


  return (
    <div className=' mt-[90px]'>
      {props.cartArr.length>0 ?  <div className='container justify-center w-max m-auto  flex md:flex-row flex-col gap-2 '>
          <div className='bg-black p-5 md:w-[600px] w-[100%] m-auto rounded-xl'>
            <h1 className='border-b text-white border-white py-3 text-xl'>Cart</h1>
              {
                props.cartArr.map((ele, i)=>{
                  return <div className='flex justify-between my-6  text-white items-center'>
                      <div className='flex gap-6'>
                        <img src={ele.thumbnail} className='w-25 h-25 ' alt="" />
                          <div>
                              <h1>{ele.title}</h1>
                              <button className='text-red-400 my-1'>remove</button>
                              <div className='flex my-1 gap-2 items-center'>
                                <button className='bg-[#3e3c3c] px-3 py-1 rounded cursor-pointer'>-</button>
                                  <span className='text-sm'>{ele.quantity}</span>
                                <button onClick={()=>handleIncrement(ele,i)} className='bg-[#3e3c3c] px-2 py-1 rounded cursor-pointer'>+</button>
                              </div>
                          </div>
                      </div>

                      <div>${ele.price.toFixed(2)}</div>
                  </div>
                })
              }
          </div>

          <div className='bg-white h-max p-6  mx-auto md:w-auto w-full rounded-lg'>
            <div className='flex items-center'>
              <input type="text" className='outline-none px-4 py-3 border border-gray-400 rounded-ss-lg rounded-es-lg' placeholder='Promo Code' />
                <button className='bg-[#5477d6] text-white px-4 py-3 rounded-se-lg rounded-ee-lg'>Apply</button>
            </div>
              <div className='my-4 flex flex-col gap-4'>
              <p className='flex justify-between'><span>Discount</span> <b>${discountInRuppes.toFixed(2)}</b></p>
              <p className='flex justify-between'><span>Shipping</span> <b>${shipping.toFixed(2)}</b></p>
              <p className='flex justify-between'><span>Tax</span> <b>${tax.toFixed(2)}</b></p>
              <p className='flex justify-between'><b>Total</b> <b>${finalTotal.toFixed()}</b></p>
              </div>

              <button className='bg-[#5477d6] text-white px-4 py-2 block w-full rounded-lg'>Checkout</button>
              <button className='bg-[#4ADE80] my-2 text-white px-4 py-2 block w-full rounded-lg'>Continue Shipping</button>
          </div>
        </div>
        :
        
        <h1 className='text-3xl text-center mt-[100px] text-white'>Cart is empty</h1>
      }
    </div>
  )
}

export default Cart



