import { PrimaryButton } from "@/app/components";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-gray-200 bg-opacity-10 p-3 px-10">
      <PrimaryButton variant="dark">Restore Defaults</PrimaryButton>
      <PrimaryButton variant="light">Save Settings</PrimaryButton>
    </footer>
  );
};

export default Footer;
