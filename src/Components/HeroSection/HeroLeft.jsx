import React from 'react'
import { MotionConfig, motion } from "framer-motion";
import Reviews from './Reviews'
export default function HeroLeft() {
  const variants = {
    initial:{scale:0, opacity:0 },
    animate:{scale:1, opacity:1 ,transition:{
      duration:0.6
    } },
    hover:{scale:1.06}
  }
  return (
    <MotionConfig
    transition={{ type:'spring', damping:10,stiffness:50}}
    >
    
    <div className=' flex flex-col items-start'>
        <motion.div layout='position' className='flex flex-col gap-6 py-5'>
        <motion.h1
          initial={{x:'-100%', opacity:0 }}
          animate={{x:0 ,opacity:1}}
        className='text-3xl font-semibold font-[Verdana,Geneva,Tahoma,sans-serif]'>Wide Option Of Choice <br />
        it's not just a food
        </motion.h1>
        <motion.h1 
          initial={{y:'100', opacity:0 }}
          animate={{y:0 ,opacity:1}}
        className='font-semibold font-[font-serif] text-5xl'>Delicious<span className='text-[#FF6600]'> Food</span></motion.h1>
        <p>A Symphony of Flavors Your Journey to Culinary Bliss Starts Now.</p>
        
        </motion.div>
        <motion.div layout className="self-center sm:self-start lg:self-start flex items-center sm:gap-3 lg:gap-3 gap-12 mt-5">
          <motion.button 
          variants={variants} animate='animate' initial='initial' whileHover='hover'
          className='py-1 px-4 font-[500] rounded-full bg-[#FF6600]/80 text-white text-lg  transition-gpu '>Our Menu</motion.button>
          <motion.button
          variants={variants} animate='animate' initial='initial'  whileHover='hover'
          className='py-1 px-4 font-[500] rounded-full bg-slate-400/30 text-black text-lg  transition-gpu '>Book Table</motion.button>
        </motion.div>
        <Reviews/>
    </div>
    </MotionConfig>
  )
}
