"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (event?: React.MouseEvent) => {
    const nextTheme = theme === "light" ? "dark" : "light";

    const updateDOM = () => {
      setTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      if (event) {
        x = event.clientX;
        y = event.clientY;
      }

      document.documentElement.style.setProperty("--x", `${x}px`);
      document.documentElement.style.setProperty("--y", `${y}px`);

      // Add class to temporarily disable active transitions during snapshot
      document.documentElement.classList.add("theme-transitioning");

      const transition = (document as any).startViewTransition(updateDOM);

      transition.finished.finally(() => {
        document.documentElement.classList.remove("theme-transitioning");
      });
    } else {
      updateDOM();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
