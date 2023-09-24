import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
export default function Reviews() {
  return (
    <div className='space-y-1 mt-7'>
      <h1 className='font-bold'>Reviews</h1>
      <div className='flex gap-2 w-20 h-10 relative '>
        <img src="/Reviews/0.png" className='w-8 absolute' alt="" />
        <img src="/Reviews/1.png" className='w-8 absolute left-7' alt="" />
        <img src="/Reviews/2.png" className='w-8 absolute left-14' alt="" />
        <p className='w-10 absolute left-20 bg-black rounded-full text-white text-xs text-center py-2.5 px-1'>+9</p>
      </div>
      <div className="flex items-center ">
        <StarIcon className='text-yellow-400 w-5' />
        <StarIcon className='text-yellow-400 w-5' />
        <StarIcon className='text-yellow-400 w-5' />
        <StarIcon className='text-yellow-400 w-5' />
        <StarIcon className='text-yellow-400 w-5' />
      </div>
    </div>
  )
}
