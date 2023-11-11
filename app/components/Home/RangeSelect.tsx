import React, { useState } from "react";

type Props = {};

const RangeSelect = (props: Props) => {
  const [radius, setRadius] = useState(10);
  return (
    <div className="mt-5">
      <h2 className="font-bold px-2">Select Radius (In Meter)</h2>
      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none  cursor-pointer accent-[#f49e42] "
        min={0}
        max={100}
        step={10}
        onChange={(e) => {
          setRadius(Number(e.target.value));
        }}
        defaultValue={radius}
      />
      <label className="text-gray-500 text-[15px]">{radius} in Meter</label>
    </div>
  );
};

export default RangeSelect;
