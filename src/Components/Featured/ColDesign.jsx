import React from "react";
import { motion} from "framer-motion";
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
export default function ColDesign({price, name, des,variants }) {
  return (
    <motion.div variants={variants}  className=" group relative flex flex-col items-center justify-center">
          <div className="relative w-[300px] h-24 ">
            <div className="absolute right-12 bg-black p-3 rounded-[40%6px] z-10">
            <ShoppingCartIcon className="w-5 text-white group-hover:text-yellow-600"/>
            </div>
            <div className="absolute inset-0 left-[4rem] -top-6 rounded w-full">
              <motion.img src={`/images/${name}.png`} className="object-cover object-center w-44 group-hover:scale-105 duration-300 transition-gpu" alt={name} />
            </div>
          </div>
        <div className="p-8 w-[12rem] bg-gradient-to-tr from-black/10 to-slate-200/20 backdrop-blur-sm border border-slate-200/70 -z-10 shadow-lg rounded-[22px]">
          <div className="flex flex-col items-center mt-4">
            <h1 className="font-bold tracking-widest">{name}</h1>
            <p className="text-sm text-gray-700/80">{des}</p>
             <h3 className="self-start mt-6 font-[500] text-sm tracking-widest">${price}</h3>
          </div>
        </div>
    </motion.div>
  );
}
