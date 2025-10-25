import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // los pesos que quieras
  variable: "--font-poppins",
});




export const metadata: Metadata = {
  title: "Aircool: Campus Virtual ",
  description: "Refrigeracion integral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${poppins.variable }antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
