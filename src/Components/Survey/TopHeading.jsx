import React from 'react'

export default function TopHeading() {
  return (
    <div className='py-6 flex flex-col gap-6 items-start'>
         <h1 className='font-bold text-5xl'> <span className="italic text-7xl font-[500] leading-[1.3]">Survey</span> <br /> About Our<span className='text-[#FF6600]'> Food</span></h1>
        <p className=' opacity-70 '>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, earum. adipisicing elit. Error, similique.</p>
        <button className='py-1 w-40 px-4 rounded-full bg-[#FF6600]/80 text-white text-lg '>Book Table</button>
    </div>
    
  )
}
