import Data from "@/\bSharedData/Data";
import React, { useState } from "react";

// type Props = { onRatingChange: (arg0: any) => void };
type Props = {
  handleOnRatingChange: (arg0: any, arg1: any) => void;
  selectRating: any;
};

const SelectRating = ({ handleOnRatingChange, selectRating }: Props) => {
  // const [selectRating, setSelectedRating] = useState<number[]>([]);
  //https://stackoverflow.com/questions/62125452/type-string-is-not-assignable-to-type-never
  //useState is a generic function so use it to define the type of array.
  // const onSelectedRating = (isChecked: boolean, value: number) => {
  //   if (isChecked) {
  //     setSelectedRating([...selectRating, value]);
  //   } else {
  //     setSelectedRating(selectRating.filter((num) => num !== value));
  //   }
  //   console.log(selectRating);
  //   // onRatingChange(selectRating);
  // };
  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold">Select Rating</h2>
      <div>
        {Data.ratingList.map((data, index) => (
          <div key={index} className="flex justify-between">
            <label>{data.icon}</label>
            <input
              type="checkbox"
              onChange={(e) =>
                handleOnRatingChange(e.target.checked, data.name)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRating;
