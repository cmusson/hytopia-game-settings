"use client";

import React, { ReactNode } from "react";

interface ISliderProps {
  children: ReactNode;
  min: number;
  max: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  extraText?: string;
  onHover: () => void;
  onLeave: () => void;
}

const Slider = ({
  children,
  value,
  min,
  max,
  setValue,
  extraText,
  onHover,
  onLeave,
}: ISliderProps) => {
  return (
    <div
      className="flex items-center justify-between p-2 w-full rounded-lg border border-gray-800 bg-gray-200 bg-opacity-10 hover:bg-gray-800"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div>{children}</div>
      <div className="w-2/3 flex justify-end">
        <div className="relative w-full flex justify-end">
          <input
            onChange={(e) => setValue(Number(e.target.value))}
            type="range"
            min={min}
            max={max}
            className="appearance-none w-full h-10 m-20 border border-1 border-gray-800 rounded-lg z-5"
          />
          <div className="absolute top-0 left-0 w-full h-10 flex items-center justify-center z-10 pointer-events-none">
            <div>{`${value} ${extraText ? extraText : ""}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

//  <div className="relative flex items center">
//    <input
//      className="appearance-none rounded-lg w-full bg-gray-800 h-10 bg-black border "
//      type="range"
//      min={min}
//      max={max}
//      onChange={handleOnChange}
//    />
//    <div
//      style={{ width: width }}
//      className="absolute h-full bg-yellow-300 rounded-lg"
//    ></div>{" "}
//  </div>;
