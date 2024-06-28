import React, { ReactNode } from "react";
import { GroupTitle } from "../GroupTitle";

interface IContentGroupProps {
  group: string;
  children: ReactNode;
}

const ContentGroup = ({ group, children }: IContentGroupProps) => {
  return (
    <div className="py-2 flex flex-col w-full">
      <GroupTitle>{group}</GroupTitle>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default ContentGroup;
