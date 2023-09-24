import React from 'react'
// import img from '../Assets/hero2.png'
export default function ColDesign({name,des,price}) {
  return (
    <div className='flex flex-col items-center gap-2 group w-64'>
      <div className='rounded-full w-94'>
      <img className='object-center object-cover w-full group-hover:scale-[1.03] transition duration-300 easeinout' src={`/images/${name}.png`} alt={{}} />
      </div>
        <h1 className='font-bold title-font'>{name}</h1>
        <p className='opacity-60 text-sm'>{des}</p>
        <h1 className='text-[#F96442] mt-1 font-bold text-lg title-font'>&#36;{price}</h1>
    </div>
  )
}
