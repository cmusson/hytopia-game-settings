import Image from "next/image";
import React, { ReactNode } from "react";

interface IGroupTitleProps {
  children: ReactNode;
}

const GroupTitle = ({ children }: IGroupTitleProps) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div>{children}</div>
      <Image
        className="cursor:pointer"
        src="/info.svg"
        alt="info"
        width={15}
        height={15}
      />
    </div>
  );
};

export default GroupTitle;
