import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {adCrd,counter} from './addToCart/cartReducer'
import {useSelector,useDispatch} from 'react-redux'
const products = () => {
    const dispatch = useDispatch()
    const myState = useSelector((state)=>state.addToCart.data)
    const addToCard=(item)=>{
        dispatch(adCrd(item))
        dispatch(counter())
  
    }
  return (
<section className=' '>
    <div className="w-[90%] mx-auto my-0">

      <div className="text-center flex justify-center items-center ">
        <p className='text-lg mr-2'>Add Products to Cart for Shopping and See the cart items</p>
        <Link href='./cart'><span className='py-1 text-[#8dc8ee] px-2 border-2 border-[#8dc8ee] rounded-md cursor-pointer hover:bg-[#38505f]'>here</span></Link>
      </div>
      <div className="flex gap-4 mt-4 pb-8 flex-wrap">
      {myState.map((item,index)=>(
        <div key={index} className="flex flex-col gap-1 mx-4">
          <Image src={item.img} className='rounded-md'/>
          <p className='dark:text-slate-400'>{item.title}</p>
          <p>${item.price}</p>
          <p  className='dark:text-slate-400'>{item.reviews}</p>
          <button className='hover:bg-[#616c7e8c]  py-2 px-2 border-2 rounded-md w-full border-[#8dc8ee]' onClick={()=>addToCard(item)}>Add to cart</button>
        </div>
      ))}
      
      </div>
    </div>
    </section>
  )
}

export default products