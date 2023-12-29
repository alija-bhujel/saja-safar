import React from 'react'
import single from "../assets/image/single.png";
import double from "../assets/image/double.png";
import triple from "../assets/image/triple.png";


function Plans() {
  return (
    <div className='py-[100px] px-2'>
    <div className=' max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>

        <div className=' w-full shadow-xl flex flex-col h-[600px] rounded my-4 hover:scale-105 duration-500' >
<img className='w-20 mx-auto mt-[-3rem] bg-white' src = {single} alt='/' />
<h2 className='text-center text-3xl font-bold py-9'>Web Development</h2>
<p className='text-center text-4xl font-bold'>$149</p>
<div className='text-center font-medium'>
  <p className='py-4 mt-7 mx-8 border-b'>Hello web developer!</p>
  <p className='py-4 mt-7 mx-8 border-b'>Lorem Ipsum is simply dummy text of the printing</p>
  <p className='py-4 mt-7 mx-8 border-b'>Lorem Ipsum is simply dumm</p>
</div>
<button className='bg-[#00df9a] w-[200px] rounded-md font-medium py-3 px-6 my-6 mx-auto'>Start trial</button>
        </div>
        <div className='w-full shadow-xl h-[600px] flex flex-col rounded my-4 bg-gray-200 hover:scale-105 duration-500' >
        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src = {double} alt='/' />
        <h2 className='text-center text-3xl font-bold py-9'>Digital Marketing</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
  <p className='py-4 mt-7 mx-8 border-b'>Hello web developer!</p>
  <p className='py-4 mt-7 mx-8 border-b'>Lorem Ipsum is simply dummy text of the printing</p>
  <p className='py-4 mt-7 mx-8 border-b'>Lorem Ipsum is simply dumm</p>
</div>
<button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium py-3 px-6 my-6 mx-auto'>Start trial</button>
        </div>
        <div className='w-full shadow-xl h-[600px]  rounded my-4 flex flex-col hover:scale-105 duration-500' >
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src = {triple} alt='/' />
        <h2 className='text-center text-3xl font-bold py-9'>App Development</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
  <p className='py-4 mt-7 mx-8 border-b'>Hello web developer!</p>
  <p className='py-4 mt-7 mx-8 border-b'>Lorem Ipsum is simply dummy text of the printing</p>
  <p className='py-4 mt-7 mx-8 border-b'>Lorem Ipsum is simply dumm</p>
</div>
<button className='bg-[#00df9a] w-[200px] flex flex-col rounded-md font-medium  text-center py-3 px-6 my-6 mx-auto'>Start trial</button>
        </div>
        
    </div>
      
    </div>
  )
}

export default Plans
