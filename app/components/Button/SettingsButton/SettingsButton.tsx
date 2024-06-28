"use client";

import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

interface ISettingsButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  selected: boolean;
}

const SettingsButton = ({
  children,
  selected,
  ...props
}: ISettingsButtonProps) => {
  const style = selected
    ? "bg-black border-white"
    : "bg-gray-200 bg-opacity-10 border-transparent text-gray-200";

  return (
    <button
      className={`border px-8 py-1 rounded-lg text-xs hover:bg-gray-800 active:bg-gray-700 ${style}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SettingsButton;
