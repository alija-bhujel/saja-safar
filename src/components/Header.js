import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

function Header() {
  const [toggle, setToggle] =useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] py-[15px] flex  items-center justify-between border-black mx-auto'>
        <div className='text-4xl font-bold'>Safar</div>
        {
          toggle ? 
          <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl text-white md:hidden block'/>
          :
          <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-2xl  text-white md:hidden block'/>
        }
      
       <ul className=' hidden md:flex text-white gap-10 '>
        <li>
          Home
        </li>
        <li>
          Company
        </li>
        <li>
          Resources
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
       </ul>
      {/* Responsive Menu*/}
       <ul className={ ` duration-300 md:hidden w-full h-screen  text-white fixed bg-black top-[98px] 
       ${ toggle ? 'left-[0]' : 'left-[-100%]'}`}>
        <li className='p-5'>
          Home
        </li>
        <li className='p-5'>
          Company
        </li>
        <li className='p-5'>
          Resource
        </li>
        <li className='p-5'>
          About
        </li>
        <li className='p-5'>
          Contact
        </li>
       </ul>
      </div>
    </div>
  )
}

export default Header
