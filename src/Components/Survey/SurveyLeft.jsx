import React from 'react'
import img from '../Assets/newsurvey.jpg'
export default function SurveyLeft() {

   
  return (
    <div  className="relative group sm:w-2/5 lg:w-2/5 mx-auto rounded-lg overflow-hidden">
       <img className='object-center group-hover:scale-105 duration-500  transition-gpu object-cover ' src={img} alt="" />
    </div>
  )
}
