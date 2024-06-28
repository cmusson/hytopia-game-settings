"use client";
import { SettingsButton } from "@/app/components";
import React, { useState } from "react";

const initialSettings = [
  { title: "Video", selected: true },
  { title: "Game", selected: false },
  { title: "Interface", selected: false },
  { title: "Keyboard", selected: false },
  { title: "Mouse", selected: false },
  { title: "Audio", selected: false },
  { title: "Chat", selected: false },
  { title: "Privacy", selected: false },
];

const Settings = () => {
  const [settings, setSettings] = useState(initialSettings);
  const handleClick = (name: string) => {
    console.log(settings);
    const updatedSelection = settings.map((setting) => {
      if (setting.title == name) {
        return { ...setting, selected: true };
      } else {
        return { ...setting, selected: false };
      }
    });
    setSettings(() => updatedSelection);
  };

  return (
    <section className="flex align-center justify-between py-4 border-b">
      <div>Settings</div>
      <nav>
        <ul className="flex items-center gap-2">
          {settings.map((setting, i) => (
            <li key={i}>
              <SettingsButton
                onClick={() => handleClick(setting.title)}
                selected={setting.selected}
              >
                {setting.title}
              </SettingsButton>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Settings;
