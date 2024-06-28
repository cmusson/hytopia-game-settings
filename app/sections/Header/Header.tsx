import { ExternalLink, Search, SecondaryButton } from "@/app/components";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between pb-2 border-b">
      <div className="flex flex-row items-center justify-start gap-10">
        <Image width={100} height={100} src="/HYTOPIA.svg" alt="Hytopia" />
        <div className="flex flex-row gap-4">
          <ExternalLink href=" ">Play</ExternalLink>
          <ExternalLink href=" ">Marketplace</ExternalLink>
          <ExternalLink href=" ">Locker</ExternalLink>
        </div>
        <Search className="" />
      </div>

      <div className="flex flex-row gap-2">
        <SecondaryButton className="text-xs text-white px-4">
          $18,391
        </SecondaryButton>
        <SecondaryButton className="px-4">
          <Image width={20} height={20} src="/Icon.svg" alt="friends" />
        </SecondaryButton>
        <SecondaryButton>
          <Image width={30} height={30} src="/Chat-Avatar.svg" alt="chat" />
        </SecondaryButton>
      </div>
    </header>
  );
};

export default Header;
