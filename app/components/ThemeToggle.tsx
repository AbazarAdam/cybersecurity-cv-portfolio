"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

// Inline context to avoid server-side errors
import { createContext } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export { ThemeContext };

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [localTheme, setLocalTheme] = useState<Theme>("light");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMounted(true);
      const saved = localStorage.getItem("theme") as Theme | null;
      const theme = saved ?? "light";
      setLocalTheme(theme);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = localTheme === "light" ? "dark" : "light";
    setLocalTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-neon-blue/30 bg-glass backdrop-blur-md"
        aria-label="Toggle theme"
      >
        <SunIcon className="h-5 w-5 text-neon-blue" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-neon-blue/30 bg-glass backdrop-blur-md transition-all hover:border-neon-blue/60 hover:bg-neon-blue/10"
      aria-label={`Switch to ${localTheme === "dark" ? "light" : "dark"} mode`}
    >
      {localTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-neon-blue" />
      ) : (
        <MoonIcon className="h-5 w-5 text-neon-blue" />
      )}
    </button>
  );
}
