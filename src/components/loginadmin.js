import React from 'react'

function dashboard() {
  return (
   <section className='flex gap-6'>
   <div className='bg-[#0e0e0e] min-h-screen w-72'>
   <div>
    <Link to={"/"}>
    <h2>Dashboard</h2>

    </Link>
   </div>

   </div>
   <div className='m-3 text-xl text-gray-900 font-semibold'>
    WElcome to admin dashboard!!
   </div>

   </section>
  )
}

export default dashboard
