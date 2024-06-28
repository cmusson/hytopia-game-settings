import React, { ReactNode } from "react";
import Link from "next/link";

interface IExternalLinkProps {
  children: ReactNode;
  href: string;
}

const ExternalLink = ({ children, href }: IExternalLinkProps) => {
  return (
    <Link href={href} className="text-gray-200 hover:text-white">
      {children}
    </Link>
  );
};

export default ExternalLink;
