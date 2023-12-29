import React from 'react'

function Newsletter() {
  return (
    <div className='bg-[#2699fb] p-4'>
    <div className='max-w[1240px] mx-auto md:flex justify-between py-[50px]'>
        <div className='m-2 '>
            <h1 className=' text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest IT skills</h1>
            <span className='text-white'>Sign up to your newsletter and stay update.</span>
        </div>
        <div className='m-2'>
            <input type="text"className='p-3 mr-2 mb-2 text-slate-600 rounded ' placeholder='Email' />
            <button className='bg-black text-white p-3 rounded'>Get Started</button>
            <br/>
            <p>We care about the protection of your data.Read our <br/><a href="" className='text-black font-medium'>Privacy Policy</a></p>
        </div>
    </div>
      
    </div>
  )
}

export default Newsletter
