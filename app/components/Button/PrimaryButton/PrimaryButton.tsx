"use client";

import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

interface IPrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant: "dark" | "light";
}

const PrimaryButton = ({ variant, children }: IPrimaryButtonProps) => {
  const style =
    variant === "dark"
      ? "bg-black text-gray-200 border border-gray-700 bg-transparent hover:bg-black active:bg-gray-800"
      : "bg-white text-black border border-white hover:bg-gray-300 active:bg-gray-400";
  return (
    <button className={`px-4 py-2 rounded-lg text-sm ${style}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
