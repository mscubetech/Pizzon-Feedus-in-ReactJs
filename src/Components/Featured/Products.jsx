import React, { useContext } from 'react'
import ColDesign from './ColDesign'
import { motion } from 'framer-motion'
import { States } from '../Context Api/Context'

export default function Products() {
  const {featured} = useContext(States)

  const container ={
    hidden:{opacity:0},
    show:{opacity:1, transition:{
      staggerChildren:0.5,
      staggerDirection:1
    }}
  }
  const items ={
    hidden:{opacity:0,},
    show:{opacity:1,transition:{
      type:'spring',bounce:0.4, duration:2
    }}
  }
  
  return (
    <motion.div  variants={container} viewport={{once:true}} initial='hidden'
    whileInView="show" className='flex gap-12 sm:gap-0 lg:gap-0 items-center justify-between py-10 flex-wrap sm:flex-nowrap'>
        {featured.map((item,i)=>{
        return(
          <ColDesign key={i} variants={items} name={item.name} price={item.price} des={item.des}/>
        )
    })}
    </motion.div>
  )
}
