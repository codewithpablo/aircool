// app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// 👇 Importar el ThemeProvider
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // los pesos que quieras
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Aircool: Campus Virtual",
  description: "Refrigeracion integral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 💡 suppressHydrationWarning es necesario cuando se manipula el <html>
    // El tema es aplicado por el ThemeProvider, no en el <html> directamente
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} max-w-screen overflow-x-hidden`}
      >
        {/* 🔑 Envolvemos el contenido con el proveedor de temas */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}