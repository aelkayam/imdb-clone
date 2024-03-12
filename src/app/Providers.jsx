"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-100 min-h-screen select-none transition-colors duration-200">
        {children}
      </div>
    </ThemeProvider>
  );
}
