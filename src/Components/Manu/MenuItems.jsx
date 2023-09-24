import React, { useContext } from 'react'
import ColDesign from './ColDesign'
import { States } from '../Context Api/Context'
export default function MenuItems() {
  const {allProducts} = useContext(States)
  return (
   <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4  sm:grid-rows-2 rounded-lg p-2 gap-y-16 place-items-center'>
     {
       allProducts.map((item,i)=>{
            return(
                <ColDesign key={i} name={item.name} des={item.des} price={item.price}/>
            )
        })
     }
     {
      allProducts.length<1 && <div className=" col-span-4 pt-12 animate-pulse">
        <h1 className='font-bold text-center text-2xl text-yellow-600'>Currently , No any Item is available in this category !</h1>
      </div>
     }
   </div>
  )
}
