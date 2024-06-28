"use client";

import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

interface ISecondaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const SecondaryButton = ({
  children,
  className,
  ...props
}: ISecondaryButtonProps) => {
  return (
    <button
      className={`p-2 bg-gray-200 bg-opacity-10 backdrop-blur-[25px] hover:bg-gray-800 active:bg-gray-700 rounded-lg text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
