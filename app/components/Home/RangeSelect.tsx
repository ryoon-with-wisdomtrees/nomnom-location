import React, { useState } from "react";

type Props = { handleOnRangeChange: (arg0: any) => void; radius: any };

const RangeSelect = ({ handleOnRangeChange, radius }: Props) => {
  // const [radius, setRadius] = useState(2500);
  return (
    <div className="mt-5">
      <h2 className="font-bold px-2">Select Radius (In Meter)</h2>
      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none  cursor-pointer accent-[#f49e42] "
        min="500"
        max="10000"
        step="100"
        onChange={(e) => {
          handleOnRangeChange(e);
        }}
        defaultValue={radius}
      />
      <label className="text-gray-500 text-[15px]">{radius} in Meter</label>
    </div>
  );
};

export default RangeSelect;
