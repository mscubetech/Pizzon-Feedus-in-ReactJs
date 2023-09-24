import React, { useContext } from "react";
import { useState } from "react";
import { States } from "../Context Api/Context";
export default function Tags() {
  const { handleCatgory } = useContext(States);
  const tags = [
    { name: "all" },
    { name: "drinks" },
    { name: "pasta" },
    { name: "burgers" },
    { name: "salads" },
    { name: "deserts" },
    { name: "pizzas" },
  ];
  const handleClick = (tag) => {
    setActive(tag.name);
    handleCatgory(tag);
  };
  const [active, setActive] = useState("all");
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-4 bg-slate-100/70 rounded-full p-3">
        {tags.map((tag, i) => {
          return (
            <button
              key={i}
              onClick={(e) => handleClick(tag)}
              className={`${
                active === tag.name ? "bg-[#F96442] text-white " : ""
              }
                  border border-[#F96442]/30 px-3 hover:border-[#F96442]/70 ease-in-out transition duration-300 uppercase rounded-full font-semibold sm:text-md text-sm sm:px-6 sm:py-3 py-1 sm:w-md 
              `}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
