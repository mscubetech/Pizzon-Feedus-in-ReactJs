import React from 'react'
import dots from '../Assets/icons/dots.png'
export default function Coldesign({icon ,name,des}) {
  return (
    <div className='flex group flex-col items-center gap-3.5  '>
        <img className='w-10 sm:w-12 group-hover:animate-[spin_1s_1] transition duration-300 ease-in-out ' src={icon} alt="" />
        <div>
            <h1 className='sm:font-bold text-xs sm:text-2xl '>{name}</h1>
            <img src={dots} className='w-5 object-fit mx-auto' alt="" />
        </div>
        <p className=' text-gray-600/70 hidden sm:block text-center '>{des}</p>
    </div>
  )
}
