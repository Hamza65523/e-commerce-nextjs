import React,{useState,useEffect} from "react";
import Image from "next/image";
import Iphone from "../assests/iphone.jpg";
import { useSelector } from "react-redux";
import Link from 'next/link'
const cart = () => {
  const addCrd = useSelector((state)=>state.addToCart.adCrt)
  const count = useSelector((state)=>state.addToCart.count)
  const [value,setValue] = useState(addCrd)
  const [sums,setSum] = useState(0)
  const handlerDelete=(item)=>{
    const newData = value.filter((e,id)=>(
      id !== item
    ))
    setValue(newData)
  }
  useEffect(()=>{
    let arry = []
    value.map((sadf)=>(arry.push(sadf.price)))
    let sum =arry.reduce((partialSum, a) => partialSum + a, 0);
    setSum(sum)
  },[value])
 
  return (
    <div className=" ">
      <div className="flex justify-between w-[90%] mx-auto my-0 gap-8">
        <div className="w-full space-y-6 my-8">
          <h1 className="my-8  text-2xl font-bold">Shopping Cart ({count}  {count == 0?'item':'items'})</h1>
          {value.map((items,index)=>(
          <div key={index} className="flex justify-between items-center rounded-md">
            <div className="flex gap-8 items-center">
              <Image src={items.img} className="h-[50px]" />
              <div className="">
                <h1 className="font-bold">{items.title}</h1>
                <p className=" text-[#92969d]">
                  {items.reviews} <span>${items.price}</span>
                </p>
                <p className="underline text-[#92969d]">Add gift wrapping</p>
              </div>
            </div>
              <span className="text-4xl py-2 px-2 cursor-pointer hover:bg-slate-500 rounded-md" onClick={()=>handlerDelete(index)}>X</span>
          </div>

          ))}
        </div>
        <div className="mt-8">
          <div className="border-2 rounded-md w-[350px] border-[#92969d] py-8 px-8">
            <h1 className="text-xl font-bold">Order Summary</h1>
            <div className="flex justify-between space-y-3 mt-8">
              <h2>Subtotal</h2>
              <span>${sums}</span>
            </div>
            <div className="flex justify-between space-y-3">
              <h2>Shipping + Tax</h2>
              <span className="underline">Calculate shipping</span>
            </div>
            <div className="flex justify-between space-y-3">
              <h2>Coupon Code</h2>
              <span className="underline">Add coupon code</span>
            </div>
            <div className="flex justify-between space-y-3">
              <h2 className="font-bold text-xl">Total</h2>
              <span className="font-bold text-xl">${sums}</span>
            </div>
            <button className="w-full py-2 px-4 border-2 border-[#8dc8ee] rounded-md mt-4">
              Checkout -
            </button>
          </div>
          <div className="flex mt-4 gap-2 text-center justify-center">
            <p className="font-bold text-xl">or</p>
           <Link href='/products' > 
             <span  className="font-bold text-xl cursor-pointer"> Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
