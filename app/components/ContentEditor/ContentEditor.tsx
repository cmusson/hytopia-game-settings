"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { SecondaryButton } from "../Button";
import { Selected } from "../Selected";
import { ContentOptions, Option } from "@/app/typings";

interface IContentEditor {
  children: ReactNode;
  options: Option[];
  slider?: boolean;
  displayOptions: ContentOptions;
  onHover: (options: ContentOptions, type: string, selected: string) => void;
  onLeave: () => void;
}

const ContentEditor = ({
  children,
  options,
  onHover,
  onLeave,
  displayOptions,
}: IContentEditor) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selected, setSelected] = useState(options[selectedIndex].title);

  useEffect(() => {
    setSelected(options[selectedIndex].title);
    onHover(displayOptions, children as string, selected);
  }, [selectedIndex, options, selected]);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % options.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + options.length) % options.length
    );
  };

  return (
    <div
      className="flex items-center justify-between p-2 w-full rounded-lg border border-gray-800 bg-gray-200 bg-opacity-10 hover:bg-gray-800"
      onMouseEnter={() => onHover(displayOptions, children as string, selected)}
      onMouseLeave={onLeave}
    >
      <div className="text-sm">{children}</div>
      <div className="flex items-center justify-end gap-2 w-2/3">
        <SecondaryButton
          onClick={handlePrev}
          className="px-4 hover:bg-gray-600 bg-gray-700 bg-opacity-100"
        >{`<`}</SecondaryButton>
        <Selected>{selected}</Selected>
        <SecondaryButton
          onClick={handleNext}
          className="px-4 hover:bg-gray-600 bg-gray-700 bg-opacity-100"
        >{`>`}</SecondaryButton>
      </div>
    </div>
  );
};

export default ContentEditor;
