import React,{useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faSun,faMoon} from '@fortawesome/free-solid-svg-icons'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const {theme,setTheme}=useTheme()
  const count = useSelector((state)=>state.addToCart.count)

  return (
   <div className=" ">
     <div className='w-[90%] mx-auto my-0'>
           <nav>
          <ul className='flex justify-between py-8 '>
            <div className="flex gap-10 ">
            <li className='text-xl text-[#8dc8ee]'><FontAwesomeIcon className={` mr-2 ${theme=="dark"?'text-white':'text-black'}`} icon={faCartShopping}/>Redux Shopping</li>
           <Link href='/products'><li className='text-lg hover:bg-[#616c7e8c] cursor-pointer  py-1 px-2 hover:bg-red   rounded-md'>Products</li></Link>
           <Link href='/cart' className='text-lg cursor-pointer hover:bg-[#616c7e8c] py-1 px-2   rounded-md'><li className='text-lg hover:bg-[#616c7e8c] cursor-pointer  py-1 px-2 hover:bg-red   rounded-md'>Cart</li></Link>
            </div>
            <div className="flex gap-10 ">
            <li  className='text-lg cursor-pointer hover:bg-[#616c7e8c] py-1 px-2 rounded-md border-2 border-[#8dc8ee] text-[#8dc8ee]'><FontAwesomeIcon icon={faCartShopping} className='mr-2'/>Items in Cart: {count}</li>
            <li  className='text-lg relative w-16 cursor-pointer border-2 border-[#8dc8ee] py-1 px-1 rounded-full flex items-center gap-2  justify-evenly' onClick={()=>{setToggle(!toggle),setTheme(theme=="light"?'dark':"light")}}>
           <div className={`w-6 h-6 ${toggle?'left-8':'left-1'} absolute bg-[#8dc8ee] rounded-full`}></div>

           <span className=''><FontAwesomeIcon icon={faSun} className='text-[#8dc8ee]'/></span> <span className=' '><FontAwesomeIcon icon={faMoon} className='text-[#8dc8ee]'/></span>
           
             
            </li>
            {/* <li  className='text-lg cursor-pointer hover:bg-[#616c7e8c] py-1 px-2 rounded-md'><FontAwesomeIcon icon={}/></li> */}
            </div>
          </ul>
        </nav>
    </div>
   </div>
  )
}

export default Navbar