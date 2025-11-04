// 🟢 providers/ThemeProvider.tsx

'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
// 💡 CORREGIDO: Importamos el tipo directamente desde la raíz de 'next-themes'
import type { ThemeProviderProps } from 'next-themes'; 

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class" // Aplica la clase 'dark' o 'light' al <html>
      defaultTheme="system" // Usa la preferencia del SO por defecto
      enableSystem // Permite el cambio entre system, light, y dark
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}