import Data from "@/\bSharedData/Data";
import Image from "next/image";
import React, { useState } from "react";

//tsrsfce
type Props = { onCategoryChange: (arg0: string) => void };

const CategoryList = ({ onCategoryChange }: Props) => {
  const [categoryList, setCategoryList] = useState(Data.CategoryListData);
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <div>
      <h2 className="font-bold px-2">Select Food Type</h2>
      <div
        className="grid 
      grid-cols-2 
      md:grid-cols-2 
      lg:grid-cols-3"
      >
        {categoryList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col
              justify-center items-center bg-gray-100
              p-2 m-2 rounded-lg grayscale 
              hover:grayscale-0 cursor-pointer
              text-[13px]
               border-orange-400
              ${selectedCategory == index ? "grayscale-0 border-[1px]" : null}`}
            onClick={() => {
              setSelectedCategory(index);
              onCategoryChange(item.value);
            }}
          >
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
