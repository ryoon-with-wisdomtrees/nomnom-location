import Data from "@/\bSharedData/Data";
import Image from "next/image";
import React, { useState } from "react";

//tsrsfce
type Props = {};

const CategoryList = (props: Props) => {
  const [categoryList, setCategoryList] = useState(Data.CategoryListData);
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <div>
      <h2 className="font-bold  p-2 m-2">Select Food Type</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-col-3`}>
        {categoryList.map((data, index) => (
          <div
            onClick={() => setSelectedCategory(index)}
            className={`flex flex-col justify-center items-center  p-2 m-2 rounded-lg 
           grayscale hover:grayscale-0
           hover:scale-105  cursor-pointer border-[1px] hover:border-[#f49e42] ${
             selectedCategory === index && "grayscale-0 bg-[#f49e42] "
           }`}
          >
            <Image alt="" src={data.icon} width={40} height={40} />
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
