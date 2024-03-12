"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-lg cursor-pointer hover:text-amber-500"
            onClick={() => {
              setTheme("light");
            }}
          />
        ) : (
          <MdDarkMode
            className="text-lg cursor-pointer hover:text-amber-500"
            onClick={() => {
              setTheme("dark");
            }}
          />
        ))}
    </div>
  );
}
