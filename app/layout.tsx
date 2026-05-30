// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers/ThemeProvider";
import { GlobalCinematicBackground } from "@/components/mine/other/GlobalCinematicBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Aircool: Campus Virtual",
  description: "Refrigeración integral",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={poppins.variable}>
      <body className="min-h-screen max-h-screen transition-colors duration-300 antialiased">
        <Providers>
          <main className="w-full relative z-10">
            <GlobalCinematicBackground />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}