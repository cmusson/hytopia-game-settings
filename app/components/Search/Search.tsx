"use client";

import Image from "next/image";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface ISearchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Search = ({}: ISearchProps) => {
  return (
    <div className="ml-8 bg-black flex items-center justify-start border border-gray-300 rounded-lg overflow-hidden">
      <Image
        className="ml-2 mr-1"
        src="/search.svg"
        alt="search"
        height={10}
        width={10}
      />
      <input type="text" className="bg-black flex-1 p-1" />
    </div>
  );
};

export default Search;
