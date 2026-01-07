// components/ThemeToggle.tsx

'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Manejamos el caso en que el tema aún no se ha montado (para evitar problemas de hidratación)
  if (!theme) return null; 

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-4 rounded-full transition-colors flex justify-center w-fit m-auto bg-blue-400  hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md"
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