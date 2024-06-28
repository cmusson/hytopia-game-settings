import React, { ReactNode } from "react";

interface ISelectedProps {
  children: ReactNode;
}

const Selected = ({ children }: ISelectedProps) => {
  const offStyle =
    children === "Off" ? "bg-black text-gray-800" : "bg-white text-black";
  return (
    <div className={`${offStyle} p-2 rounded-lg w-2/3 text-center flex-grow`}>
      {children}
    </div>
  );
};

export default Selected;
