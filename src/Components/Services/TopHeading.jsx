import React from 'react'

export default function TopHeading() {
  return (
    <div className='flex items-center justify-center w-full'>
    <div className='py-6 flex flex-col items-center gap-6'>
         <h1 className='font-semibold font-[font-serif] text-5xl'>Choose Best<span className='text-[#FF6600]'> Services</span></h1>
        <p className='text-center text-gray-600/70 sm:w-1/2'>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, earum. adipisicing elit. Error, similique.</p>
        <hr className='sm:w-14 w-40  border-[#FF6600] border-2 '/>
    </div>
    </div>
  )
}
