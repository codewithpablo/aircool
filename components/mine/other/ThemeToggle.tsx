'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-4 rounded-full transition-colors flex justify-center w-fit m-auto shadow-md
      ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-400 hover:bg-gray-200"}`}
      aria-label="Alternar modo oscuro/claro"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}