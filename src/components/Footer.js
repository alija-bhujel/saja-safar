import React from 'react'
import{
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-[#2699fb] p-4'>
    <div className='max-w-[1240px] mx-auto   py-16 px-4 grid grid-cols-3 gap-8 '>
      <div>
        <h1 className='text-black w-full text-3xl font-bold'>Saja Safar</h1>
        <p className='py-4 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
         <div className='flex justify-between text-white md:w-[75%] my-6'>
         <FaFacebookSquare size={30}/>
         <FaInstagram size={30}/>
         <FaTwitterSquare size={30}/>
         <FaGithubSquare size={30}/>
         </div>
      </div>
      <div className=' lg:col-span-2 flex justify-between mt-6'>
        <div>
        <h6 className='font-medium text-black'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm text-white'>Analytics</li>
            <li className='py-2 text-sm text-white'>Marketing</li>
            <li className='py-2 text-sm text-white'>Commerce</li>
            <li className='py-2 text-sm text-white'>Insights</li>
        </ul>
        </div>
        <div>
        <h6 className='font-medium text-black'>Support</h6>
        <ul>
            <li className='py-2 text-sm text-white'>Pricing</li>
            <li className='py-2 text-sm text-white'>Documentation</li>
            <li className='py-2 text-sm text-white'>Guides</li>
            <li className='py-2 text-sm text-white'>API status</li>
        </ul>
        </div>
        <div>
        <h6 className='font-medium text-black'>Company</h6>
        <ul>
            <li className='py-2 text-sm text-white'>About</li>
            <li className='py-2 text-sm text-white'>Vlog</li>
            <li className='py-2 text-sm text-white'>Jobs</li>
            <li className='py-2 text-sm text-white'>Press</li>
        </ul>
        </div>
        <div>
        <h6 className='font-medium text-black'>Legal</h6>
        <ul>
            <li className='py-2 text-sm text-white'>Claim</li>
            <li className='py-2 text-sm text-white'>Policy</li>
            <li className='py-2 text-sm text-white'>Terms</li>
            <li className='py-2 text-sm text-white'>Conditions</li>
        </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
