import React from 'react'
import Products from './Products'

export default function FeaturedSection() {
  return (
    <div className="max-w-7xl  pt-4 mx-auto">
      <div className='p-3 px-1 flex flex-col gap-10'>
        <div className='flex items-center flex-col justify-center space-y-5 '>
          <h1 className='font-semibold font-[font-serif] text-5xl'>Our <span className='text-[#FF6600]'>Featured</span></h1>
          <p className=' w-[35ch] text-gray-600/70 px-3 sm:w-7/12 justify-center text-center'>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, earum. adipisicing elit. Error, similique.</p>
          <hr className='sm:w-14 w-40  border-[#FF6600] border-2 ' />
        </div>
        <Products />
      </div>
    </div>
  )
}
