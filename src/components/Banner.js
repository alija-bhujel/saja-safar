import React from 'react'
import Typed from 'react-typed';
 

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[80px]'>
      <div className='max-w-[1240px]  my-[100px] mx-auto text-center font-bold'>

      <div className=' text-xl md:text-3xl md:p-[18px]'>Learn with us</div>

      <h2 className='text-white  text-[50px] md:text-[80px] md:p-[18px]'>Grow with us</h2>

      <h3 className=' text:[40px] md:text-[60px] text-white md:p-[18px]'>Learn
      <Typed className='pl-3'
                    strings={['Web Development','Ethical Hacking' ,'Digital Marketing']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                /></h3>
                 <button className='bg-black text-white p-3 rounded'>Get Started</button>

      </div>
     
    </div>
  )
}

export default Banner
