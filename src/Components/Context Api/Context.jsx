import React, { createContext, useState } from 'react'
import { Featured, Products } from './Products';
const States = createContext();
export default function Context({children}) {
  const menu = Products;
  const featured = Featured;
  const [category, setcategory] = useState(null);
  
  const filteredProduct = category ? menu.filter((item)=>item.category===category) :menu
  const allProducts = category==='all' ? menu :filteredProduct;

const handleCatgory = (tag)=>{
  setcategory(tag.name)
}

  return (
    <States.Provider value={{  category ,featured , allProducts,handleCatgory}}>{children}</States.Provider>
  )
}

export {States}