import React from 'react'
import TopHeading from './TopHeading'
import Tags from './Tags'
import MenuItems from './MenuItems'

export default function ManuSection() {
  return (
    <div id='menu' className='my-10 min-h-screen'>
    <div className='flex px-2 flex-col max-w-7xl mx-auto gap-y-10'>
        <TopHeading/>
        <div className='mt-1 w-full'>
          <Tags/>
          </div>
      <MenuItems/> 
    </div>
    </div>
  )
}
