import React from 'react'
import view from '../assets/image/lakeside.jpg';

function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2'>
     <div className=' col-span-1 md:w-[80%]'>
        <img src ={view} alt="" className='inline'/>
     </div>
     <div className=' flex flex-col justify-center col-span-1'>
        <h1 className='text-xl text-[#245638] font-bold my-2 '>Lakeside,Pokhara</h1>
        <p className='my-2 text-justify'>
        The beautiful and mystical country of Nepal never fails to impress, 
        with its dense jungles, cloudy mountaintops, exotic wildlife, fascinating cultures 
        and scintillating topography. The lakes, glimmering like mirrors and reflecting the
         enviable skyline of snow-capped mountains and blue skies make for perfect postcard 
         moments. Apart from the welcome change, the idyllic region is also pocket-friendly.
        </p>
        <button className=' w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
     </div>
    </div>
  )
}

export default Experts
